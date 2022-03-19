import type { AppOptions, RouterOptions } from '../types'

export const resolveRouterOptions = ({
  history,
  routes,
  scrollBehavior,
  linkActiveClass,
  linkExactActiveClass
}: AppOptions): RouterOptions => ({
  history,
  routes,
  scrollBehavior,
  linkActiveClass,
  linkExactActiveClass
})
