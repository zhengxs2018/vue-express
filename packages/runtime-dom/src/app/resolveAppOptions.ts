import { inBrowser } from '@zhengxs/cross-env'

import { createWebHistory, createMemoryHistory } from 'vue-router'
import type { RouterScrollBehavior } from 'vue-router'

import type { AppConfig, AppOptions } from '../types'

const historyCreator = inBrowser ? createWebHistory : createMemoryHistory

const defaultScrollBehavior: RouterScrollBehavior = (to, _, savedPosition) => {
  if (savedPosition) return savedPosition
  if (to.hash) return { el: to.hash }
  return { top: 0 }
}

export const resolveAppOptions = ({
  base = '/',
  lang = 'zh-CN',
  title = '',
  description = '',
  routes,
  history = historyCreator(base),
  scrollBehavior = defaultScrollBehavior,
  clientAppSetups = [],
  clientAppEnhances = [],
  linkActiveClass = '',
  linkExactActiveClass = ''
}: AppConfig): AppOptions => ({
  // SiteData
  base,
  lang,
  title,
  description,
  // RouterConfig
  history,
  routes,
  scrollBehavior,
  linkActiveClass,
  linkExactActiveClass,
  // 拓展
  clientAppSetups,
  clientAppEnhances
})
