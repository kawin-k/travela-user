import * as type from './type'

const initialState = {
  keyword: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_TRIP_KEYWORD:
      return {
        keyword: action.payload
      }
    default:
      return state
  }
}
