import * as constants from './constants'

// ({}) 使用箭头函数 返回一个对象 
export const fileChange = (value) => ({
  type: constants.FILE_CHANGE,
  value,
})


export const fileRomve = () => ({
  type: constants.FILE_REMOVE,
})


// 发往 saga 的
export const fileUpload = (value) => ({
  type: constants.FILE_UPLOAD,
  value,
})

