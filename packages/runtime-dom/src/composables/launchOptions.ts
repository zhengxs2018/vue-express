import { inBrowser } from '@zhengxs/cross-env'

import { shallowRef } from 'vue'
import type { Ref } from 'vue'

/**
 * 启动配置
 */
export type LaunchOptions = {
  location: URL
  searchParams: URLSearchParams
}

export type LaunchOptionsRef = Ref<LaunchOptions>

// TODO 支持自定义 keys 配置
const resolveLaunchOptions = (url: string): LaunchOptions => {
  const location = new URL(url)
  const searchParams = location.searchParams

  return {
    location,
    searchParams
  }
}

/**
 * 启动配置参数
 *
 * 不推荐 SSR 环境使用
 */
const launchOptions: LaunchOptionsRef = shallowRef(
  resolveLaunchOptions(inBrowser ? window.location.href : 'file:')
)

/**
 * 配置启动地址
 * @param url - 启动地址
 */
export const setupLaunchUrl = (url: string) => {
  launchOptions.value = resolveLaunchOptions(url)
}

/**
 * 获取启动配置
 *
 * @returns 启动配置
 */
export const useLaunchOptions = (): LaunchOptionsRef => launchOptions
