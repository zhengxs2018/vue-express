import { unref } from 'vue'
import type { App } from 'vue'

import { siteData } from '../composables'
import type { SiteDataRef } from '../composables'
import { withBase } from '../helpers'
import type { SiteData } from '../types'

export interface GlobalComputed {
  siteData: SiteDataRef
}

/**
 * Create and provide global computed
 */
export const setupGlobalComputed = (app: App): void => {
  // provide global helpers
  Object.defineProperties(app.config.globalProperties, {
    $site: { get: () => unref(siteData) },
    $withBase: { get: () => withBase }
  })
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $site: SiteData
    $withBase: typeof withBase
  }
}
