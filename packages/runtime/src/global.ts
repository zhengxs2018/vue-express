const fallbackGlobalObject = {}

/**
 * 从不同的 JavaScript 环境中获取全局对象
 *
 * @see [globalThis](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
 * @returns 一定会返回对象
 */
export function getGlobalObject<T = Window, U = T & typeof globalThis>(): U {
  if (typeof globalThis !== 'undefined') return globalThis as unknown as U
  if (typeof self !== 'undefined') return self as unknown as U
  if (typeof window !== 'undefined') return window as unknown as U
  if (typeof global !== 'undefined') return global as unknown as U
  return fallbackGlobalObject as unknown as U
}
