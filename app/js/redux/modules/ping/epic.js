import { mapTo, delay } from 'rxjs/operators'
import { ofType, combineEpics } from 'redux-observable'

import * as types from './type'
import * as actions from './action'

const pingEpic = action$ => action$.pipe(
  ofType(types.PING),
  delay(1000),
  mapTo(actions.doPong())
)

export default pingEpic
