import { takeEvery } from 'redux-saga/effects'
import * as constants from './constants'

const putFile = async () => {
  console.log(2)
}

// saga 做了检查必须是这种类型
function* mySaga() {
  yield takeEvery(constants.FILE_UPLOAD, putFile);
}

export default mySaga;