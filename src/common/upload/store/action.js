import * as constants from './constants'

// ({}) 使用箭头函数 返回一个对象 
export const fileChange = (value) => ({
  type: constants.FILE_CHANGE,
  value,
})


export const fileRomve = (index) => ({
  type: constants.FILE_REMOVE,
  index,
})


export const startUpload = (index) => ({
  type: constants.START_UPLOAD,
  index,
})

export const finishUpload = (index) => ({
  type: constants.FINISH_UPLOAD,
  index,
})

export const uploadProgress = (index, percent) => ({
  type: constants.UPLOAD_PROGRESS,
  index,
  percent,
})

export const finishFileUndo = (index) => ({
  type: constants.FINISH_FILE_UNDO,
  index,
})


// 发往 saga 的
export const fileUpload = (index) => ({
  type: constants.FILE_UPLOAD,
  index,
})


export const fileUndo = (index) => ({
  type: constants.FILE_UNDO,
  index,
})

export const fileStep = (index, step) => ({
  type: constants.FILE_STEP,
  index,
  step,
})

export const fileEnd = (index) => ({
  type: constants.FILE_END,
  index,
})
