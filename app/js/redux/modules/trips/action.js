import * as type from './type'
import { makeActionCreator } from '../../utils'

export const getTrips = {
  request: makeActionCreator(type.GET_TRIPS.REQUEST, 'params'),
  success: makeActionCreator(type.GET_TRIPS.SUCCESS, 'payload'),
  failure: makeActionCreator(type.GET_TRIPS.FAILURE, 'error')
}


