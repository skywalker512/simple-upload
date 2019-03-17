import { takeEvery, all, put, fork, call } from 'redux-saga/effects'
import ajax from '@/utils/ajax'
import * as constants from './constants'
import * as actionCreater  from './action'

function* putFile (action) {
  try {
    yield put(actionCreater.startUpload(action.index))
    yield call(ajax, 'POST', '/upload', action.res.toJS())
    yield put(actionCreater.finishUpload(action.index))
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