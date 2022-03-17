/**
 * Determine a link is http link or not
 *
 * - http://github.com
 * - https://github.com
 * - //github.com
 */
export const isLinkHttp = (link: string) => /^(https?:)?\/\//.test(link)

/**
 * Remove ending slash / from a string
 */
export const removeEndingSlash = (str: string): string => str.replace(/\/$/, '')

/**
 * Remove leading slash / from a string
 */
export const removeLeadingSlash = (str: string): string =>
  str.replace(/^\//, '')
