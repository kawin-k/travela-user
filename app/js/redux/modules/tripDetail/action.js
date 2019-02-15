import * as type from './type'
import { makeActionCreator } from '../../utils'

export const getTripDetail = {
  request: makeActionCreator(type.GET_TRIP_DETAIL.REQUEST, 'params'),
  success: makeActionCreator(type.GET_TRIP_DETAIL.SUCCESS, 'payload'),
  failure: makeActionCreator(type.GET_TRIP_DETAIL.FAILURE, 'error')
}


