import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  file: [],
})

// file: {
//   filename,
//   filedata
//   isUploaded
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FILE_CHANGE:
      return state.setIn(['file', state.get('file').size], action.value)
    case constants.FILE_REMOVE:
      return state.deleteIn(['file', action.index])
    case constants.START_UPLOAD:
      return state.setIn(['file', action.index, 'uploadStatus'], 1)
    case constants.FINISH_UPLOAD:
      return state.setIn(['file', action.index, 'uploadStatus'], 2)
    case constants.FINISH_FILE_UNDO:
      return state.setIn(['file', action.index, 'uploadStatus'], 0).setIn(['file', action.index, 'uploadProgress'], 0)
    case constants.UPLOAD_PROGRESS:
      return state.setIn(['file', action.index, 'uploadProgress'], action.percent)
    default:
      return state
  }
}