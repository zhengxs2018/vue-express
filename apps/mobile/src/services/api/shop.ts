import type { ShopDefinition } from '/@/shared'

import { defineAPI } from '../helpers'

export const SHOP_INFO_GET_URI = '/api/shop/info'

export const get = defineAPI<ShopDefinition>(SHOP_INFO_GET_URI)

export default {
  get
}
