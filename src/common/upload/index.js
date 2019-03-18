import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { action } from './store'
import { fromJS } from 'immutable'

import readFileAsync from '@/utils/readfile'
import bytesToSize from '@/utils/bytesToSize'

import UploadBoxCom from './components/uploadBox'

import {
  Input,
  Label,
  UploadTips,
  UploadWrapper,
  UploadCircle,
} from './style'

class Upload extends PureComponent {
  constructor(props) {
    super(props)
    this.handleDrag = this.handleDrag.bind(this)
  }
  handleDrag(e) {
    e.stopPropagation()
    e.preventDefault()
  }
  render() {
    const { handleFileChange } = this.props
    const { file } = this.props
    return (
      <Fragment>
        <Input onChange={handleFileChange} />
        <UploadWrapper
          _height={`${(file.size) * 62 + 76}px`}
        >
          <UploadBoxCom />
          <Label onDrop={handleFileChange}>
            <UploadTips>
              Drag & Drop your files or Browse
            </UploadTips>
          </Label>
        </UploadWrapper>
      </Fragment>
    )
  }
  componentDidMount() {
    window.addEventListener('dragover', this.handleDrag)
    window.addEventListener('drop', this.handleDrag)
  }

  componentWillUnmount() {
    window.removeEventListener('dragover', this.handleDrag)
    window.removeEventListener('drop', this.handleDrag)
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
      e.preventDefault()
      const files = e.target.files || e.dataTransfer.files
      Array.from(files).forEach(async element => {
        if (element.size > 20971520) return // 限制 20 mb
        const res = await readFileAsync(element)
        const fileObj = fromJS({
          filename: element.name,
          filedata: res,
          isUploaded: false,
          filesize: bytesToSize(element.size),
        })
        dispatch(action.fileChange(fileObj))
      })
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Upload)
