import * as type from './type'
import { makeActionCreator } from '../../utils'

export const getFilterTripKeyword = makeActionCreator(type.GET_TRIP_KEYWORD, '')
