import type { AppOptions, SiteData } from '../types'

export const resolveSiteData = ({
  base,
  lang,
  title,
  description
}: AppOptions): SiteData => ({
  base,
  lang,
  title,
  description
})
