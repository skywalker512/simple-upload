import { takeLeading, all, put, fork, take } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import ajax from '@/utils/ajax'
import * as constants from './constants'
import * as actionCreater from './action'

// 修改函数, 相当于 saga 提供了一个 同步方案, 通过 emitter 来控制状态
function createAsyncTaskRunnerForUpload(action) {
  return eventChannel(emitter => {
    ajax('POST', '/upload', action.res.toJS(), function (e) {
      const percent = Math.floor((e.loaded / e.total) * 100)
      emitter(percent)
      if (percent === 100) {
        emitter(END)
      }
    })
    // subscriber 必须返回一个 unsubscribe 函数
    // unsubscribe 将在 saga 调用 `channel.close` 或者 emit(END) 时被调用, END 来自于 import { END } from 'redux-saga'
    // 完成 之后将 进度设置成 0
    return () => { emitter(0) }
  })
}


// call 可以返回一个 Generator 函数, 也可以是一个返回 Promise 或任意其它值的普通函数, 所以这里可以使用 await
function* fileUploader(action) {
  try {
    const chan = createAsyncTaskRunnerForUpload(action)
    yield put(actionCreater.startUpload(action.index))
    // yield call(watchOnProgress, chan)
    try {
      while (true) {
        const percent = yield take(chan);
        yield put(actionCreater.uploadProgress(action.index, percent))
      }
    } finally {
      yield put(actionCreater.finishUpload(action.index))
    }
  } catch (err) {
    console.log(err)
  }
}

function* fileUndo(action) {
  try {
    // yield call(ajax, 'POST', '/undo', action.res.toJS())
    yield put(actionCreater.finishFileUndo(action.index))
  } catch (error) {
    console.log(error)
  }
}

function* watchFileUpload() {
  // takeLeading 是一个使用 take 和 call 构建的高级 API, call 是阻塞执行的
  // TODO -------- 使用 take race 取消上传
  yield takeLeading(constants.FILE_UPLOAD, fileUploader);
}

function* wathFileUndo() {
  yield takeLeading(constants.FILE_UNDO, fileUndo);
}


function* sagas() {
  // all 相当于是 Promise#all 会等待全部执行完毕
  // fork 相当于异步命令(不阻塞) call 相当于同步命令(阻塞)
  yield all([fork(watchFileUpload), fork(wathFileUndo)])
}

export default sagas;