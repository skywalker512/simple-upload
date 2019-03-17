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
      return state.setIn(['file', -1], action.value)
    case constants.FILE_REMOVE:
      return state.deleteIn(['file', action.index])
    case constants.START_UPLOAD:
      return state.setIn(['file', action.index, 'isUploaded'], false)
    case constants.FINISH_UPLOAD:
      return state.setIn(['file', action.index, 'isUploaded'], true)
    case constants.FINISH_FILE_UNDO:
      return state.setIn(['file', action.index, 'isUploaded'], false)
    default:
      return state
  }
}