import * as type from './type'

const initialState = {
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_MY_TRIP.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case type.ADD_MY_TRIP.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    case type.ADD_MY_TRIP.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
