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
      return state.set('file', state.get('file').push(action.value))
    case constants.FILE_REMOVE:
      return state.set('file', state.get('file').delete(action.index))
    // case constants.REQUEST_POST:
    //   return state
    // case constants.RECEIVE_POST:
    //   return state
    default:
      return state
  }
}