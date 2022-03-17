import shop from './shop'

export default {
  shop
}

// 仅开发的时加载 mocks 文件
if (import.meta.env.DEV) {
  const files = import.meta.globEager('./*.mock.ts')
  console.log(`[Services] Loaded ${Object.keys(files).length} files`)
}
