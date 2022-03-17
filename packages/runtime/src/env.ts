/**
 * 是否处于浏览器环境
 */
export const inBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'

/**
 * 是否处于 Web Worker 环境
 */
export const inWebWorker =
  typeof self === 'object' &&
  self.constructor &&
  self.constructor.name === 'DedicatedWorkerGlobalScope'

/**
 * 是否处于 NodeJS 环境
 */
export const inNodeJS =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null

/**
 * 是否处于 JSDOM 环境
 */
export const inJsDom = typeof window !== 'undefined' && window.name === 'nodejs'

/**
 * 是否处于乾坤加载环境
 *
 * @see [如何独立运行微应用](https://qiankun.umijs.org/zh/faq#%E5%A6%82%E4%BD%95%E7%8B%AC%E7%AB%8B%E8%BF%90%E8%A1%8C%E5%BE%AE%E5%BA%94%E7%94%A8)
 */
export const inQianKun = inBrowser && window['__POWERED_BY_QIANKUN__'] === true
