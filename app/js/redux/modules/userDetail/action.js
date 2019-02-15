import * as type from './type'
import { makeActionCreator } from '../../utils'

export const storeUserDetail = makeActionCreator(type.STORE_USER_DETAIL, 'payload')
