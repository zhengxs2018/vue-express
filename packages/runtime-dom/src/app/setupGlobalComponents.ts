import type { App } from 'vue'

import { ClientOnly } from '@zhengxs/core'

/**
 * Register global built-in components
 */
export const setupGlobalComponents = (app: App): void => {
  app.component('ClientOnly', ClientOnly)
}
