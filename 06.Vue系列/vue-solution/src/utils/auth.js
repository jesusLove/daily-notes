import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from './storage'

// 设置时间戳
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}
// 获取时间戳

export function getTimeStamp() {
  return getItem(TIME_STAMP)
}
// 是否超时
export function isCheckTimeStamp() {
  const curTime = Date.now()
  const timeStamp = getTimeStamp()
  return curTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
