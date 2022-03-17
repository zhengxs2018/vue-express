import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import navbar from './configs/navbar'
import sidebar from './configs/sidebar'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'VueExpress',
  description: '基于 Vue 的研发解决方案，支持多种模式研发，让前端开发更加简单规范',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],

  themeConfig: {
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 0
  },
  plugins: [['@vuepress/search']],
  port: 7300
})
