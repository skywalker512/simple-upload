import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { action } from './store'

import readFileAsync from '@/utils/readfile'

import {
  Input,
  Label, 
  UploadBox, 
  UploadWrapper,
} from './style'

class Upload extends PureComponent {
  render() {
    const { handleFileChange } = this.props
    return (
      <Fragment>
        <Input onChange={handleFileChange} />
        <Label>
          <UploadWrapper>
            <UploadBox>
              Drag & Drop your files or Browse
            </UploadBox>
          </UploadWrapper>
        </Label>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    file: state.getIn(['upload', 'file'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
    handleFileChange(e) {
      // 转换成数组
      Array.from(e.target.files).forEach(async element => {
          console.log(URL.createObjectURL(element), element.name, element);
          const res = await readFileAsync(element)
          const fileObj = {
            filename: element.name,
            filedata: res
          }
          
          const indata = [fileObj]
          dispatch(action.fileChange(indata))
      })
    },
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Upload)
