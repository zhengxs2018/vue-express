import type { AxiosRequestConfig, Canceler } from 'axios'

export type { AxiosRequestConfig, Canceler }

export type Fetcher<T> = (config?: AxiosRequestConfig) => T | Promise<T>

export type FetcherWithParams<T, U> = (
  params: T,
  config?: AxiosRequestConfig
) => U | Promise<U>

export type FetcherWithOptionalParams<T, U> = (
  params?: T,
  config?: AxiosRequestConfig
) => U | Promise<U>
