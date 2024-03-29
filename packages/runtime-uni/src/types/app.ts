import type { App, Component } from 'vue'

export type ClientAppEnhance = (context: { app: App }) => void | Promise<void>

export type ClientAppSetup = (context: { app: App }) => void

export type AppConfig = {
  clientAppEnhances?: ClientAppEnhance[]
  clientAppSetups?: ClientAppSetup[]
}

export type AppOptions = Required<AppConfig>

export type CreateVueAppFunctionSync<T = unknown> = (
  RootComponent: Component,
  config: AppConfig & T
) => {
  app: App
}

export type CreateVueAppFunction<T = unknown> = (
  RootComponent: Component,
  config: AppConfig & T
) => Promise<{
  app: App
}>
