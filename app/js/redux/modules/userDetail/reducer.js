import * as type from './type'

const initialState = {
  currentUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.STORE_USER_DETAIL:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}
