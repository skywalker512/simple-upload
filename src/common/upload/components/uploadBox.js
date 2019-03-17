import React, { PureComponent, Fragment } from 'react'
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
    const { handleFileRemove, handleFileUpload } = this.props
    const { file } = this.props
    return (
      <Fragment>
        {
          file.map((res, index) => (
            <FileBox key={res.get('filename')}>
              <CloseButton onClick={()=>handleFileRemove(index)} />
              <FileInfo>
                <FileTitle>{res.get('filename')}</FileTitle>
                <FileSize>89 kb{index}</FileSize>
              </FileInfo>
              <UploadButton onClick={()=>handleFileUpload(res, index)}/>
            </FileBox>
          ))
        }
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
    handleFileRemove(index) {
      dispatch(action.fileRomve(index))
    },
    handleFileUpload(...args) {
      dispatch(action.fileUpload(...args))
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(UploadBoxCom)
