import { takeEvery, all, put, fork } from 'redux-saga/effects'
import ajax from '@/utils/ajax'
import * as constants from './constants'

async function putFile (action) {
  try {
    // 这里可以使用 saga 的 api: call(ajax, 'POST', '/upload', action.value.toJS())
    // call 相当于同步命令
    // 但是 await 写起来方便一些
    const a = await ajax('POST', '/upload', action.res.toJS())
    console.log(a)
    // put(constants.FILE_UPLOAD)
  } catch (error) {
    console.log(error)
  }
}

function* watchFileUpload () {
  // takeEvery 是一个使用 take 和 fork 构建的高级 API
  // TODO -------- 使用 take race 取消上传
  yield takeEvery(constants.FILE_UPLOAD, putFile);
}

function* sagas() {
  // all 相当于是 Promise#all 会等待全部执行完毕
  // fork 相当于异步命令 call 相当于同步命令
  yield all([fork(watchFileUpload)])
}

export default sagas;