import { combineEpics } from 'redux-observable'

import { epic as tripEpic } from './modules/trips'
import { epic as tripDetailEpic } from './modules/tripDetail'
import { epic as addMyTripEpic } from './modules/addMyTrip'

export default combineEpics(
  tripEpic,
  tripDetailEpic,
  addMyTripEpic,
)
