import { takeLeading, all, put, fork, call } from 'redux-saga/effects'
import ajax from '@/utils/ajax'
import * as constants from './constants'
import * as actionCreater  from './action'

function* fileUpload (action) {
  try {
    yield put(actionCreater.startUpload(action.index))
    yield call(ajax, 'POST', '/upload', action.res.toJS())
    yield put(actionCreater.finishUpload(action.index))
  } catch (error) {
    console.log(error)
  }
}

function* fileUndo (action) {
  try {
    // yield call(ajax, 'POST', '/undo', action.res.toJS())
    yield put(actionCreater.finishFileUndo(action.index))
  } catch (error) {
    console.log(error)
  }
}

function* watchFileUpload () {
  // takeLeading 是一个使用 take 和 call 构建的高级 API, call 是阻塞执行的
  // TODO -------- 使用 take race 取消上传
  yield takeLeading(constants.FILE_UPLOAD, fileUpload);
}

function* wathFileUndo () {
  yield takeLeading(constants.FILE_UNDO, fileUndo);
}


function* sagas() {
  // all 相当于是 Promise#all 会等待全部执行完毕
  // fork 相当于异步命令(不阻塞) call 相当于同步命令(阻塞)
  yield all([fork(watchFileUpload), fork(wathFileUndo)])
}

export default sagas;