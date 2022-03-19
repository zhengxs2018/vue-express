import { inBrowser } from '@zhengxs/cross-env'

import { createApp, createSSRApp, h } from 'vue'
import { createPinia } from 'pinia'

import type { CreateVueAppFunctionSync } from '../types'

import { resolveAppOptions } from './resolveAppOptions'

const appCreator = inBrowser ? createApp : createSSRApp

export const createVueAppSync: CreateVueAppFunctionSync = (
  RootComponent,
  config
) => {
  const options = resolveAppOptions(config)

  const { clientAppSetups, clientAppEnhances } = options

  const app = appCreator({
    name: 'VueExpress',
    setup() {
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup({ app })
      }

      // TODO 后期用于支持主题或插件提供全局组件
      return () => h(RootComponent)
    }
  })

  // 为了可以提前使用 pinia 的功能
  // 如: 设置初始用户数据
  app.use(createPinia())

  for (const clientAppEnhance of clientAppEnhances) {
    clientAppEnhance({ app })
  }
  return {
    app
  }
}
