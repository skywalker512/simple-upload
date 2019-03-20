import React, { PureComponent } from 'react'
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
  Progress,
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
              timeout={400}
              classNames="filebox"
            >
              <Progress _progress={res.get('uploadProgress')} >
                <FileBox>

                  <CSSTransition timeout={400} classNames="button" in={res.get('uploadStatus') === 0}
                  >
                    <CloseButton onClick={() => handleFileRemove(index)} />
                  </CSSTransition>
                  <FileInfo>
                    <FileTitle>{res.get('filename')}</FileTitle>
                    <FileSize>{res.get('filesize')} </FileSize>
                  </FileInfo>
                  <CSSTransition timeout={400} classNames="button" in={res.get('uploadStatus') === 0} unmountOnExit>
                    <UploadButton onClick={() => handleFileUpload(index)} />
                  </CSSTransition>
                  {res.get('uploadStatus') === 1 ? <p>{res.get('uploadProgress')} %</p> : null}
                  <CSSTransition timeout={400} classNames="button" in={res.get('uploadStatus') === 2} unmountOnExit>
                    <UndoButton onClick={() => handleFileUndo(index)} />
                  </CSSTransition>
                </FileBox>
              </Progress>
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
