import { siteData } from '../composables'
import type { SiteData } from '../types'

export const setupSiteData = (data: SiteData) => {
  siteData.value = data
}
