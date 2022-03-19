import { reactive } from 'vue'
import type { GlobalData } from '../shared'

export const globalData: GlobalData = reactive({})

export const useGlobalData = (): GlobalData => globalData
