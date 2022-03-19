import { defineClientAppEnhance } from '@zhengxs/runtime-dom'

import { useLaunchOptions } from '../composables'

/**
 * 医院数据处理
 *
 * - 确保医院ID数据的正确
 * - 获取医院信息
 */
export default defineClientAppEnhance(async ({ router }) => {
  const launchOptions = useLaunchOptions()

  if (launchOptions.shopId == null) {
    // 仅本地开发时才会设置本地测试店铺
    if (process.env.NODE_ENV === 'development') {
      launchOptions.shopId = import.meta.env.VITE_APP_TEST_SHOP_ID as string
    }

    // 如果店铺ID不存在就跳转到不可操作提示页
    if (launchOptions.shopId == null) {
      await router.replace('/errors/not-acceptable')
      return
    }
  }

  // TODO 获取店铺数据
})
