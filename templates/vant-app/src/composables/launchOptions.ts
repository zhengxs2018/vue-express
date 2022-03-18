import { inBrowser } from '@zhengxs/runtime'

import { shallowRef, unref } from 'vue'
import type { Ref } from 'vue'

/**
 * 启动配置
 */
export interface LaunchOptions {
  location: URL
  searchParams: URLSearchParams
  shopId: string | null
}

export type LaunchOptionsRef = Ref<LaunchOptions>

const resolveLaunchOptions = (url: string): LaunchOptions => {
  const location = new URL(url)
  const searchParams = location.searchParams

  return {
    location,
    searchParams,
    shopId: searchParams.get('shopId')
  }
}

/**
 * 启动配置参数
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
export const useLaunchOptions = (): LaunchOptions => unref(launchOptions)
