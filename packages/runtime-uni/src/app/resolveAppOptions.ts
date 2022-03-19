import type { AppConfig, AppOptions } from '../types'

export const resolveAppOptions = ({
  clientAppSetups = [],
  clientAppEnhances = []
}: AppConfig): AppOptions => ({
  clientAppSetups,
  clientAppEnhances
})
