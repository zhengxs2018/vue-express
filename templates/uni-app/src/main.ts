import { createVueAppSync } from '@zhengxs/runtime-uni'

import App from './App.vue'

export function createApp() {
  return createVueAppSync(App, {})
}
