import Mock from 'mocks'

import type { ShopDefinition } from '/@/shared'
import type { ServiceResponse } from '../types'

import { SHOP_INFO_GET_URI } from './shop'
import shop_test_info_response from './data/shop_test_info_response.json'

Mock.mock(
  SHOP_INFO_GET_URI,
  (): ServiceResponse<ShopDefinition> => shop_test_info_response
)
