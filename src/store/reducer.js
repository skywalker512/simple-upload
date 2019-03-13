import { combineReducers } from 'redux-immutable';

import { reducer as heroReduer } from '@/common/hero/store'

export default combineReducers({
  hero: heroReduer,
})