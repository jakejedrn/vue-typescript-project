import { BASE_URL, TIME_OUT } from './request/config'
import HRequest from './request'

const hRequest = new HRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: true,
  interceptors: {
    requestInterceptors: (config) => {
      // console.log('请求成功的拦截')
      const token = ''
      config.headers.Authorization = `Bearer ${token}`
      return config
    },
    // requestInterceptorsCatch: (err) => {
    //   return err
    // },
    responseInterceptors: (res) => {
      // console.log('响应成功的拦截')
      return res
    }
    // responseInterceptorsCatch: (err) => {
    //   console.log('响应失败的拦截')
    //   return err
    // }
  }
})

export default hRequest
