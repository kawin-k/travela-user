import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import * as type from './type'
import * as actions from './action'

import { staticAPI } from '../../../lib/constants/api'

const getTripDetailEpic = (action$, state$, { callStaticAPI }) => action$.pipe(
  ofType(type.GET_TRIP_DETAIL.REQUEST),
  mergeMap((action) => {
    const [method, url] = staticAPI.trips
    const state = state$.value
    const {
      id,
      uid,
    } = action.params
    return callStaticAPI({
      url: `${url}/${id}`,
      method,
      body: {
        status: 'published',
      },
      headers: {
        "X-User": uid,
      },
    }).pipe(
      map(result => actions.getTripDetail.success(result.response.data))
    )
  })
)

export default getTripDetailEpic
