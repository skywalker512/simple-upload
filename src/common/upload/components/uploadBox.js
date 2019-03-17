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
          file.map(res => (
            <FileBox key={res.get('filename')}>
              <CloseButton onClick={handleFileRemove} />
              <FileInfo>
                <FileTitle>{res.get('filename')}</FileTitle>
                <FileSize>89 kb</FileSize>
              </FileInfo>
              <UploadButton onClick={()=>handleFileUpload(res)}/>
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
    handleFileRemove() {
      dispatch(action.fileRomve())
    },
    handleFileUpload(res) {
      dispatch(action.fileUpload(res))
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(UploadBoxCom)
