import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  file: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FILE_CHANGE:
      console.log(action.value)
      return state.set('file', action.value)
    default:
      return state
  }
}