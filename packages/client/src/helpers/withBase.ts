import { isLinkHttp, removeLeadingSlash } from '@zhengxs/util'

import { useSiteData } from '../composables'

/**
 * Prefix url with site base
 */
export function withBase(path: string): string {
  if (isLinkHttp(path)) return path
  const base = useSiteData().value.base
  return `${base}${removeLeadingSlash(path)}`
}
