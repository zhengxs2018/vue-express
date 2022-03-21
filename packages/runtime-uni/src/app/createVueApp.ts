import { createSSRApp, h } from 'vue'
import { createPinia } from 'pinia'

import type { CreateVueAppFunction } from '../types'

import { resolveAppOptions } from './resolveAppOptions'

export const createVueApp: CreateVueAppFunction = (RootComponent, config) => {
  const options = resolveAppOptions(config)

  const { clientAppSetups, clientAppEnhances } = options

  const app = createSSRApp({
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
