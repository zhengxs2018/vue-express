import type {
  RouterHistory,
  RouteRecordRaw,
  RouterScrollBehavior
} from 'vue-router'

export type RouterConfig = {
  history?: RouterHistory
  routes: RouteRecordRaw[]
  scrollBehavior?: RouterScrollBehavior
  linkActiveClass?: string
  linkExactActiveClass?: string
}

export type RouterOptions = Required<RouterConfig>
