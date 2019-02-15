import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import * as type from './type'
import * as actions from './action'

import { staticAPI } from '../../../lib/constants/api'

const addMyTripEpic = (action$, state$, { callStaticAPI }) => action$.pipe(
  ofType(type.ADD_MY_TRIP.REQUEST),
  mergeMap((action) => {
    const [method, url] = staticAPI.addMyTrip
    const state = state$.value
    const {
      tid,
      uid,
    } = action.params
    console.log(tid,uid)
    return callStaticAPI({
      url,
      method,
      body: {
        tripId: tid,       
      },
      headers: {
        "X-User": uid,
        'Content-Type': 'application/json',
      },
    }).pipe(
      map(result => actions.addMyTrip.success(result.response.data))
    )
  })
)

export default addMyTripEpic
