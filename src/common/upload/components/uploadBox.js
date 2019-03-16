import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { action } from '../store'

import {
  FileBox,
  CloseButton,
  FileInfo,
  FileTitle,
  FileSize,
  UploadButton,
} from '../style'

class UploadBoxCom extends PureComponent {
  render() {
    const { file } = this.props
    return (
      <FileBox>
        <CloseButton />
        <FileInfo>
          <FileTitle>kkkkkkk.png</FileTitle>
          <FileSize>89 kb</FileSize>
        </FileInfo>
        <UploadButton />
      </FileBox>
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
  }
}

export default connect(mapStateToProps, mapDispathToProps)(UploadBoxCom)
