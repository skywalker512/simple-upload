import * as constants from './constants';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable'

const defaultState = fromJS([])

// file: {
//   filename,
//   filedata
//   isUploaded
// }

const file = (state = defaultState, action) => {
  switch (action.type) {
    case constants.FILE_CHANGE:
      return state.push(action.value)
    case constants.FILE_REMOVE:
      return state.delete(action.index)
    case constants.START_UPLOAD:
      console.log(action.index)
      return state.mergeIn([action.index], {uploadStatus: 1})
    case constants.FINISH_UPLOAD:
      return state.mergeIn([action.index], {uploadStatus: 2})
    case constants.FINISH_FILE_UNDO:
      return state.mergeIn([action.index], {
				uploadStatus: 0,
				uploadProgress: 0,
			})
    case constants.UPLOAD_PROGRESS:
      return handelProgress(state, action)
    default:
      return state
  }
}


const handelProgress = (state, action) => {
  const step = state.getIn([action.index, 'step']) // 正在进行的那步 从一开始就是 1
  const totalStep = state.getIn([action.index, 'totalStep'])
  const progress =  ( 1 / totalStep ) * action.percent + ( ( step-1 ) / totalStep )
  return state.mergeIn([action.index],{
    uploadProgress: progress,
    step: step+1
  })
}


export default combineReducers({
  file,
})