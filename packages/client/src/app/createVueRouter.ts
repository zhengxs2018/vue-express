import { createRouter } from 'vue-router'
import type { Router } from 'vue-router'

import type { AppOptions } from '../types'

import { resolveRouterOptions } from './resolveRouterOptions'

export const createVueRouter = (options: AppOptions): Router => {
  const routerOptions = resolveRouterOptions(options)
  const router = createRouter(routerOptions)

  return router
}
