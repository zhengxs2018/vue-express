import { onShow, onHide } from '@dcloudio/uni-app'

import { onBeforeMount, onBeforeUnmount } from 'vue'

export type SubscriptionOptions = {
  /**
   * 订阅类型
   *
   * 广播模式下，自己发送的消息不会推送给自己
   *
   * @defaultValue broadcast
   */
  type?: 'broadcast' | 'event'
  /**
   * 页面隐藏时是否保持消息接收
   *
   * @defaultValue false
   */
  keepAlive?: boolean
}

/**
 * 订阅跨页面通信事件，在页面卸载时会自动销毁，通常情况下无需手动取消事件订阅
 *
 * 基于 uni.$on 和 uni.$emit 封装，详见 [页面通信](https://uniapp.dcloud.io/api/window/communication.html)
 */
export const useSubscription = <T, U = T>(
  name: string,
  callback: (source: T) => void,
  options: SubscriptionOptions = {}
): {
  publish: (data: U) => void
  subscribe: () => void
  unsubscribe: () => void
} => {
  const { type = 'broadcast', keepAlive = false } = options
  // 添加前缀是为了防止意外页面意外触发
  // 导致 broadcast 功能失效
  const eventName = `subject:${name}`

  let eventSource: U | null = null

  const handler = (event: U | T): void => {
    if (type === 'broadcast' && eventSource === event) {
      eventSource = null
      return
    }

    callback(event as T)
  }

  const subscribe = (): void => {
    uni.$on(eventName, handler)
  }

  const publish = (data: U) => {
    eventSource = data
    uni.$emit(eventName, data)
  }

  const unsubscribe = (): void => {
    eventSource = null
    uni.$off(eventName, handler)
  }

  if (keepAlive === false) {
    onShow(subscribe)
    onHide(unsubscribe)
  }

  onBeforeMount(subscribe)
  onBeforeUnmount(unsubscribe)

  return {
    publish,
    subscribe,
    unsubscribe
  }
}
