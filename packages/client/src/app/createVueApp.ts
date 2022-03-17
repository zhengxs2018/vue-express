import { inBrowser } from '@zhengxs/runtime'

import { createApp, createSSRApp, h } from 'vue'
import { createPinia } from 'pinia'

import { siteData } from '../composables'
import type { CreateVueAppFunction } from '../types'

import { createVueRouter } from './createVueRouter'

import { resolveAppOptions } from './resolveAppOptions'
import { resolveSiteData } from './resolveSiteData'

import { setupSiteData } from './setupSiteData'
import { setupGlobalComputed } from './setupGlobalComputed'
import { setupGlobalComponents } from './setupGlobalComponents'

const appCreator = inBrowser ? createApp : createSSRApp

export const createVueApp: CreateVueAppFunction = async (
  RootComponent,
  config
) => {
  const options = resolveAppOptions(config)
  const siteDataOptions = resolveSiteData(options)

  const { clientAppSetups, clientAppEnhances } = options

  const app = appCreator({
    name: 'VueExpress',
    setup() {
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup({ app, router, siteData })
      }

      // TODO 后期用于支持主题或插件提供全局组件
      return () => h(RootComponent)
    }
  })

  const router = createVueRouter(options)

  // 为了可以提前使用 pinia 的功能
  // 如: 设置初始用户数据
  app.use(createPinia())

  setupSiteData(siteDataOptions)
  setupGlobalComputed(app)
  setupGlobalComponents(app)

  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData })
  }

  // TODO 待验证，可以防止触发路由后续行为?
  app.use(router)

  return { app, router }
}
