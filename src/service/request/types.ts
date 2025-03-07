import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface HRequestHookInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

export interface HRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HRequestHookInterceptors<T>
  showLoading?: boolean
}
