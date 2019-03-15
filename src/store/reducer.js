import { combineReducers } from 'redux-immutable';

import { reducer as heroReduer } from '@/common/hero/store'
import { reducer as uploadReduer } from '@/common/upload/store'

export default combineReducers({
  hero: heroReduer,
  upload: uploadReduer,
})