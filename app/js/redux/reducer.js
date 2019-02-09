import { combineReducers } from 'redux'

import { reducer as pingReducer, name as PingModule } from './modules/ping'

export default combineReducers({
  [PingModule]: pingReducer,
})
