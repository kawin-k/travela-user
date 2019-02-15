import * as type from './type'
import { makeActionCreator } from '../../utils'

export const addMyTrip = {
  request: makeActionCreator(type.ADD_MY_TRIP.REQUEST, 'params'),
  success: makeActionCreator(type.ADD_MY_TRIP.SUCCESS, 'payload'),
  failure: makeActionCreator(type.ADD_MY_TRIP.FAILURE, 'error')
}


