import { takeLeading, all, put, fork, call, take } from 'redux-saga/effects'
import { eventChannel} from 'redux-saga'
import ajax from '@/utils/ajax'
import * as constants from './constants'
import * as actionCreater from './action'

// 这里的代码实现的比较不好, saga 的 put 只能在 yield 中执行
function createAsyncTaskRunnerForUpload(action) {
  let emit;
  const chan = eventChannel(emitter => {
    emit = emitter
    // subscriber 必须返回一个 unsubscribe 函数
    // unsubscribe 将在 saga 调用 `channel.close` 或者 emit(END) 时被调用, END 来自于 import { END } from 'redux-saga'
    // 这里因为后面使用 fork 来执行函数, 并且 eventChannel 没有任何其他消耗时间的操作, 所以这里 直接返回一个空函数
    return () => {}
  })
  // 将 异步请求分离, 不放在 eventChannel 里
  const promise = ajax('POST', '/upload', action.res.toJS(), function (e) {
    const percent = Math.floor((e.loaded / e.total) * 100)
    emit({ percent, action });
  })
  return {promise, chan};
}


function* watchOnProgress(chan) {
  while (true) {
    const { percent, action } = yield take(chan);
    yield put(actionCreater.uploadProgress(action.index, percent))
  }
}


// call 可以返回一个 Generator 函数, 也可以是一个返回 Promise 或任意其它值的普通函数, 所以这里可以使用 await
function* fileUploader(action) {
  // call(ajax, 'POST', '/upload', action.res.toJS()).the
  // await ajax('POST', '/upload', action.res.toJS(), function* (e) {
  //   const percent = Math.floor((e.loaded / e.total) * 100)
  //   console.log(2)
  //   yield put(actionCreater.uploadProgress(action.index, percent))
  // })
  const {promise, chan} = createAsyncTaskRunnerForUpload(action)
  yield fork(watchOnProgress, chan);
  try {
    yield put(actionCreater.startUpload(action.index))
    yield call(() => promise);
    yield put(actionCreater.finishUpload(action.index))
  } catch (err) {
    console.log(err)
  }
}

// function* fileUpload(action) {
//   try {
//     yield put(actionCreater.startUpload(action.index))
//     yield call(fileUploader, action)
//     yield put(actionCreater.finishUpload(action.index))
//   } catch (error) {
//     console.log(error)
//   }
// }

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