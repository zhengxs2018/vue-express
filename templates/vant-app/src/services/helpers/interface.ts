import type { AxiosRequestConfig, Method } from 'axios'

import { request } from '../core'
import type {
  Fetcher,
  FetcherWithParams,
  FetcherWithOptionalParams
} from '../types'

/**
 * 为统一写法而定义 API 接口函数
 * TODO 支持预定义配置与用户配置合并
 *
 * @param url - 接口地址
 * @param method - HTTP Method
 * @returns 可调用函数
 */
export const defineAPI = <T>(
  url: string,
  method: Method = 'GET'
): Fetcher<T> => {
  return (config?: AxiosRequestConfig) => request<T>({ ...config, url, method })
}

export const defineAPIWithParams = <U, T>(
  url: string,
  method: Method = 'GET'
): FetcherWithParams<U, T> => {
  return (params: U, config?: AxiosRequestConfig) =>
    request<T>({ ...config, url, method, params })
}

export const defineAPIWithOptionalParams = <U, T>(
  url: string,
  method: Method = 'GET'
): FetcherWithOptionalParams<U, T> => {
  return (params?: U, config?: AxiosRequestConfig) =>
    request<T>({ ...config, url, method, params })
}
