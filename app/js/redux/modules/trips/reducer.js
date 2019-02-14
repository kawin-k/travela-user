import * as type from './type'

const initialData = {
  trips: [],
}

const initialState = {
  data: initialData,
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_TRIPS.REQUEST:
      return {
        ...state,
        data: initialData,
        isLoading: true,
        error: null,
      }
    case type.GET_TRIPS.SUCCESS:
      return {
        ...state,
        data: {
          trips: action.payload
        },
        isLoading: false,
        error: null,
      }
    case type.GET_TRIPS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
