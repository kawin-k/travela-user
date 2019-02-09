import { combineEpics } from 'redux-observable'

import { epic as pingEpic } from './modules/ping'

export default combineEpics(
  pingEpic,
)
