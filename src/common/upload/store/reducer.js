import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  file: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.FILE_CHANGE:
      return state.set('file', fromJS(action.value))
    default:
      return state
  }
}