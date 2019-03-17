import { takeEvery, all, put } from 'redux-saga/effects'
import ajax from '@/utils/ajax'
import * as constants from './constants'

async function putFile (action) {
  try {
    const a = await ajax('POST', '/upload', action.value.toJS())
    put(constants.FILE_UPLOAD)
  } catch (error) {
    console.log(error)
  }
}

function* watchFileUpload () {
  yield takeEvery(constants.FILE_UPLOAD, putFile);
}

function* sagas() {
  yield all([watchFileUpload()])
}

export default sagas;