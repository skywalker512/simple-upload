import { takeLeading, takeEvery, all, put, fork, take, call, select } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import ajax from '@/utils/ajax'
import readFileAsync from '@/utils/readfile'
import * as constants from './constants'
import * as actionCreater from './action'
import * as selectors from './selectors'

// 修改函数, 相当于 saga 提供了一个 同步方案, 通过 emitter 来控制状态
function createAsyncTaskRunnerForUpload(resource, key, step) {
  return eventChannel(emitter => {
    ajax('POST', `/upload/data/${key}/${step}`, resource, null, function (e) {
      const percent = Math.floor((e.loaded / e.total) * 100)
      emitter(percent)
      if (percent === 100) {
        emitter(END)
      }
    })
    // subscriber 必须返回一个 unsubscribe 函数
    // unsubscribe 将在 saga 调用 `channel.close` 或者 emit(END) 时被调用, END 来自于 import { END } from 'redux-saga'
    // 完成 之后将 进度设置成 0
    return () => { }
  })
}


function* fileDataUploader(action) {
  const res = yield select(selectors.filedataSelector, action.index)
  const totalStep = yield select(selectors.totalStepSelector, action.index)
  const key = yield select(selectors.keySelector, action.index)
  const resource = yield call(readFileAsync, res, action.step)
  yield call(fileUploader, action, resource, key, action.step)
  if (action.step !== totalStep) {
    yield put(actionCreater.fileStep(action.index, action.step+1))
    // 又会发到该函数
  } else {
    yield put(actionCreater.fileEnd(action.index))
  }
}

function* fileInfoUploader(action) {
  try {
    const file = yield select(selectors.fileSelector, action.index)
    const res = yield call(ajax, 'POST', '/upload/start', file.toJS(), 'application/json')
    if (String(res) === 'ok') {
      yield put(actionCreater.startUpload(action.index))
      yield put(actionCreater.fileStep(action.index, 1))
    }
  } catch (error) {
    console.log(error)
  }
}

function* fileEndUploader(action) {
  try {
    const file = yield select(selectors.fileSelector, action.index)
    const res = yield call(ajax, 'POST', '/upload/end', file.toJS(), 'application/json')
    if (String(res) === 'ok') {
      yield put(actionCreater.finishUpload(action.index))
    }
  } catch (error) {
    console.log(error)
  }
}


// call 可以返回一个 Generator 函数, 也可以是一个返回 Promise 或任意其它值的普通函数, 所以这里可以使用 await
function* fileUploader(action, resource, key, step) {
  try {
    const chan = createAsyncTaskRunnerForUpload(resource, key, step)
    while (true) {
      const percent = yield take(chan);
      yield put(actionCreater.uploadProgress(action.index, percent))
    }
  } catch (err) {
    console.log(err)
  }
}

function* fileUndo(action) {
  try {
    const file = yield select(selectors.fileSelector, action.index)
    yield call(ajax, 'POST', '/upload/undo', file.toJS(), 'application/json')
    yield put(actionCreater.finishFileUndo(action.index))
  } catch (error) {
    console.log(error)
  }
}

function* watchFileUpload() {
  // takeLeading 是一个使用 take 和 call 构建的高级 API, call 是阻塞执行的
  // TODO -------- 使用 take race 取消上传
  yield takeLeading(constants.FILE_UPLOAD, fileInfoUploader);
}

function* wathFileUndo() {
  yield takeLeading(constants.FILE_UNDO, fileUndo);
}

function* wathFileStep() {
  yield takeEvery(constants.FILE_STEP, fileDataUploader);
}

function* wathFileEnd() {
  yield takeLeading(constants.FILE_END, fileEndUploader);
}

function* sagas() {
  // all 相当于是 Promise#all 会等待全部执行完毕
  // fork 相当于异步命令(不阻塞) call 相当于同步命令(阻塞)
  yield all([fork(watchFileUpload), fork(wathFileUndo), fork(wathFileStep), fork(wathFileEnd)])
}

export default sagas;