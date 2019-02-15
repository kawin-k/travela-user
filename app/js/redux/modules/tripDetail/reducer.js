import * as type from './type'

const initialData = {
  tripDetail: [],
}

const initialState = {
  data: initialData,
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_TRIP_DETAIL.REQUEST:
      return {
        ...state,
        data: initialData,
        isLoading: true,
        error: null,
      }
    case type.GET_TRIP_DETAIL.SUCCESS:
      return {
        ...state,
        data: {
          tripDetail: action.payload
        },
        isLoading: false,
        error: null,
      }
    case type.GET_TRIP_DETAIL.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
