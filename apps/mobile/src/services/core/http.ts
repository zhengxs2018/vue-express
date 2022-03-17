import Axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

import { HttpException } from './errors'
import type { ServiceResponse } from '../types'

export const httpClient = Axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export function setBaseURL(baseURL: string): void {
  httpClient.defaults.baseURL = baseURL
}

export function setAuthorizationValue(value: string): void {
  httpClient.defaults.headers.common['Authorization'] = value
}

export async function request<T = unknown>(
  config: AxiosRequestConfig
): Promise<T> {
  const response = await httpClient.request<ServiceResponse<T>>(config)
  const result = response.data
  const { code, message = '响应数据异常' } = result

  if (code == null) return result as unknown as T
  if (code > -1) return result.data

  return Promise.reject(new HttpException(message, code))
}
