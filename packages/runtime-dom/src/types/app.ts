import type { App, Component, Ref } from 'vue'
import type { Router } from 'vue-router'

import type { RouterConfig } from './router'
import type { SiteData } from './siteData'

export type ClientAppEnhance = (context: {
  app: App
  router: Router
  siteData: Ref<SiteData>
}) => void | Promise<void>

export type ClientAppSetup = (context: {
  app: App
  router: Router
  siteData: Ref<SiteData>
}) => void

export type AppConfig = {
  clientAppEnhances?: ClientAppEnhance[]
  clientAppSetups?: ClientAppSetup[]
} & Partial<SiteData> &
  RouterConfig

export type AppOptions = Required<AppConfig>

export type CreateVueAppFunction<T = unknown> = (
  RootComponent: Component,
  config: AppConfig & T
) => Promise<{
  app: App
  router: Router
}>
