import * as constants from './constants'
import { FILE_UPLOAD } from '@/store/saga/constants'

// ({}) 使用箭头函数 返回一个对象 
export const fileChange = (value) => ({
  type: constants.FILE_CHANGE,
  value,
})

export const fileUpload = (value) => ({
  type: FILE_UPLOAD,
  value,
})