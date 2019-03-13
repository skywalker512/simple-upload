import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  videoLoad: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.VIDEO_LOAD:
      return state.set('videoLoad', true)
  
    default:
      return state
  }
}