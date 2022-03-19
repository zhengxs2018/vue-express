import { createVueApp } from './createVueApp'
import type { CreateVueAppFunction } from '../types'

export const runApp: CreateVueAppFunction<{ el?: string | Element }> = async (
  RootComponent,
  config
) => {
  const { el = '#app' } = config
  const { app, router } = await createVueApp(RootComponent, config)
  await router.isReady()
  app.mount(el)
  return { app, router }
}
