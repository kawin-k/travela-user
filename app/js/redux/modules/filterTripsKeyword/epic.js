import { of } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import * as type from './type'
import * as actions from './action'

import { staticAPI } from '../../../lib/constants/api'

const getRawDataRequestEpic = (action$, state$, { callStaticAPI }) => action$.pipe(
  ofType(type.GET_TRIPS.REQUEST),
  mergeMap((action) => {
    const [method, url] = staticAPI.trips
    const state = state$.value
    
    return callStaticAPI({
      url,
      method,
      body: {
        status: 'published',
      }
    }).pipe(
      map(result => actions.getTrips.success(result.response.data))
    )
  })
)

export default getRawDataRequestEpic
