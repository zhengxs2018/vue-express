import Axios from 'axios'
import type { AxiosRequestConfig, Canceler } from 'axios'

import type { FetcherWithParams } from '../types'

const CancelToken = Axios.CancelToken

export function withCancelToken<T, U>(
  fetcher: FetcherWithParams<T, U>
): [FetcherWithParams<T, U>, Canceler] {
  let abort: Canceler | null = null

  function send(data: T, config?: AxiosRequestConfig) {
    cancel() // 主动取消

    const cancelToken = new CancelToken(cancel => (abort = cancel))
    return fetcher(data, { ...config, cancelToken })
  }

  function cancel(message = 'abort') {
    if (abort) {
      abort(message)
      abort = null
    }
  }

  return [send, cancel]
}
