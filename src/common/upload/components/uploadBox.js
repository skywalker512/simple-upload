import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { action } from '../store'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
      <TransitionGroup>
        {
          file.map((res, index) => (
            <CSSTransition
              key={res.get('filename')}
              timeout={900}
              classNames="filebox"
            >
              <FileBox>
                {
                  res.get('isUploaded') ? null : <CloseButton onClick={() => handleFileRemove(index)} />
                }
                <FileInfo>
                  <FileTitle>{res.get('filename')}</FileTitle>
                  <FileSize>89 kb</FileSize>
                </FileInfo>
                {
                  res.get('isUploaded') ? <UndoButton onClick={() => handleFileUndo(index)} /> : <UploadButton onClick={() => handleFileUpload(res, index)} />
                }
              </FileBox>
            </CSSTransition>

          ))
        }
      </TransitionGroup>
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
