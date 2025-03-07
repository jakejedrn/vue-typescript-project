import axios from 'axios'
import type { HRequestConfig, HRequestHookInterceptors } from './types'
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import { isUndefined } from 'lodash-es'
export default class HRequest {
  instance: AxiosInstance
  interceptors?: HRequestHookInterceptors
  loading?: any
  showLoading?: boolean
  constructor(config: HRequestConfig) {
    // 从config中取出的拦截器 是对实例的拦截器
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        console.log('所有实例都有的拦截器: 请求成功拦截')
        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器: 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        console.log('所有实例都有的拦截器: 响应成功拦截')
        const { returnCode } = res?.data
        if (returnCode === '-1001') {
          console.log('-1001请求失败')
        } else {
          return res?.data
        }
      },
      (err) => {
        switch (err.response.status) {
          case 401:
            console.log('401请求失败')
            break
          case 404:
            console.log('404请求失败')
            break
          case 500:
            console.log('500请求失败')
            break
          default:
            break
        }
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        console.log('所有实例都有的拦截器: 响应失败拦截')
        return err
      }
    )
  }

  request<T>(config: HRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!isUndefined(config.showLoading)) {
        this.showLoading = config.showLoading
      }
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          this.showLoading = true
          console.log(res)
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  put<T>(config: HRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}
