import path from 'path'

import { getPackages } from '@lerna/project'
import type { Package } from '@lerna/package'
import { filterPackages } from '@lerna/filter-packages'

export const defaultExcludePackages: string[] = []

export async function findPackages(
  include?: string[],
  exclude: string[] = defaultExcludePackages,
  showPrivate = false,
  continueIfNoMatch?: boolean
): Promise<Package[]> {
  const packages = await getPackages(path.dirname(__dirname))
  return filterPackages(
    packages,
    include,
    exclude,
    showPrivate,
    continueIfNoMatch
  )
}
