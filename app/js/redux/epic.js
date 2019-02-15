import { combineEpics } from 'redux-observable'

import { epic as tripEpic } from './modules/trips'
import { epic as tripDetailEpic } from './modules/tripDetail'

export default combineEpics(
  tripEpic,
  tripDetailEpic,
)
