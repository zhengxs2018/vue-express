import { defineClientAppEnhance } from '@zhengxs/client'

import { useLaunchOptions } from '../composables'
import { httpClient } from '../services'

/**
 * - 维护登录状态
 * - 配置全局请求参数
 */
export default defineClientAppEnhance(async () => {
  const { shopId } = useLaunchOptions()

  // 设置全局店铺ID
  httpClient.interceptors.request.use(config => {
    config.params = Object.assign({ shopId }, config.params)
    return config
  })
})
