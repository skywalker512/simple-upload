import { takeEvery, all } from 'redux-saga/effects'
import ajax from '@/utils/ajax'
import * as constants from './constants'

async function putFile (action) {
  const { filename, filedata } = action.value[0]
  const a = await ajax('POST', '/upload', {filename, filedata})
}

function* watchFileUpload () {
  yield takeEvery(constants.FILE_UPLOAD, putFile);
}

// saga 做了检查必须是这种类型
// generator 是一种全新的方法, 在调用的时候与 async 完全不同
function* mySaga() {
  yield all([watchFileUpload()])
}

export default mySaga;