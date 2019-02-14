import { combineReducers } from 'redux'

import { reducer as tripReducer, name as TripModule } from './modules/trips'

export default combineReducers({
  [TripModule]: tripReducer,
})
