import { combineReducers } from 'redux'

import { reducer as tripReducer, name as TripModule } from './modules/trips'
import { reducer as tripDetailReducer, name as TripDetailModule } from './modules/tripDetail'
import { reducer as userDetailReducer, name as userDetailModule } from './modules/userDetail'
import { reducer as addMyTripReducer, name as addMyTripModule } from './modules/addMyTrip'

export default combineReducers({
  [TripModule]: tripReducer,
  [TripDetailModule]: tripDetailReducer,
  [userDetailModule]: userDetailReducer,
  [addMyTripModule]: addMyTripReducer,
})
