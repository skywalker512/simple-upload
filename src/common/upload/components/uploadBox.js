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
  UndoButton,
} from '../style'

class UploadBoxCom extends PureComponent {
  render() {
    const { handleFileRemove, handleFileUpload, handleFileUndo } = this.props
    const { file } = this.props
    return (
      <Fragment>
        {
          file.map((res, index) => (
            <FileBox key={res.get('filename')}>
              {
                res.get('isUploaded') ? null : <CloseButton onClick={()=>handleFileRemove(index)} />
              }
              <FileInfo>
                <FileTitle>{res.get('filename')}</FileTitle>
                <FileSize>89 kb</FileSize>
              </FileInfo>
              {
                res.get('isUploaded') ? <UndoButton onClick={()=>handleFileUndo(index)}/> : <UploadButton onClick={()=>handleFileUpload(res, index)}/>
              }
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
    handleFileRemove(...args) {
      dispatch(action.fileRomve(...args))
    },
    handleFileUpload(...args) {
      dispatch(action.fileUpload(...args))
    },
    handleFileUndo(...args) {
      dispatch(action.fileUndo(...args))
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(UploadBoxCom)
