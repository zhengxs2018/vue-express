import { defineConfig } from '@zhengxs/client'

import routes from './routes'

import setupShopInfo from './setupShopInfo'
import setupHttpConfig from './setupHttpConfig'
import setupKeepQueryString from './setupKeepQueryString'

export default defineConfig({
  // 站点信息
  base: import.meta.env.BASE_URL as '/',
  // 路由配置
  routes,
  // 启动前逻辑
  clientAppEnhances: [setupShopInfo, setupHttpConfig, setupKeepQueryString]
})
