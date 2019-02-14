import { combineEpics } from 'redux-observable'

import { epic as tripEpic } from './modules/trips'

export default combineEpics(
  tripEpic,
)
