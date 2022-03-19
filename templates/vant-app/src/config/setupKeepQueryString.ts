import { defineClientAppEnhance } from '@zhengxs/runtime-dom'

import { useLaunchOptions } from '../composables'

/**
 * - 确保店铺ID不会丢失
 */
export default defineClientAppEnhance(({ router }) => {
  const { shopId } = useLaunchOptions()

  // hack 防止页面刷新后丢失医院ID
  router.beforeEach(to => {
    if ('shopId' in to.query) return
    to.query['shopId'] = shopId
    return to
  })
})
