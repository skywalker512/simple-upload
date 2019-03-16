import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { action } from './store'

import readFileAsync from '@/utils/readfile'

import UploadBoxCom from './components/uploadBox'

import {
  Input,
  Label,
  UploadTips,
  UploadWrapper,
} from './style'

class Upload extends PureComponent {
  render() {
    const { handleFileChange } = this.props
    const { file } = this.props
    if (file.size === 0) {
      return (
        // <Fragment>
        //   <Input onChange={handleFileChange} />
        //   <Label>
        //     <UploadWrapper>
        //       <UploadTips>
        //         Drag & Drop your files or Browse
        //       </UploadTips>
        //     </UploadWrapper>
        //   </Label>
        // </Fragment>
        <UploadWrapper>
          <UploadBoxCom />
        </UploadWrapper>
      )
    } else {
      return (
        <UploadWrapper>
          <UploadBoxCom />
        </UploadWrapper>
      )
    }

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
