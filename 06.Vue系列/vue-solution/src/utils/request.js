import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { isCheckTimeStamp } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      if (isCheckTimeStamp()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    const { success, message, data } = res.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    // 处理 token 超时问题
    if (err.response && err.response.data && err.response.data.code === 401) {
      store.dispatch('user/logout')
    }
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default service
