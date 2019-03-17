import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  file: [],
})

// file: {
//   filename,
//   filedata
//   isFetching
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FILE_CHANGE:
      return state.setIn(['file', -1], action.value)
    case constants.FILE_REMOVE:
      return state.deleteIn(['file', action.index])
    // case constants.REQUEST_POST:
    //   return state.set('file', state.get(''))
    // case constants.RECEIVE_POST:
    //   return state
    default:
      return state
  }
}