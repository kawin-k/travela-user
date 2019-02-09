import * as type from './type'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case type.PING:
      return true
    case type.PONG:
      return false
    default:
      return state;
  }
}
