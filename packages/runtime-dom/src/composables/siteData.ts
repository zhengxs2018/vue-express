import { ref } from 'vue'
import type { Ref } from 'vue'

import type { SiteData } from '../types'

/**
 * Ref wrapper of `SiteData`
 */
export type SiteDataRef = Ref<SiteData>

export const siteData = ref({
  base: '/',
  lang: 'zh-CN',
  title: '',
  description: ''
}) as SiteDataRef

/**
 * Returns the ref of site data
 */
export const useSiteData = (): SiteDataRef => siteData
