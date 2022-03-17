/* eslint-disable */
/// <reference types="vite/client" />

declare module 'eruda'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// ESM-HMR Interface: `import.meta.hot`
interface ImportMeta {
  VITE_APP_TEST_SHOP_ID: string
}
