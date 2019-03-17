import { all, fork } from 'redux-saga/effects'

import { saga as upload} from '@/common/upload/store'

// saga 做了检查必须是这种类型
// generator 是一种全新的方法, 在调用的时候与 async 完全不同
function* mySaga() {
  yield all([fork(upload)])
}

export default mySaga;