import { FETCH_ORDERS_PENDING, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILED } from '../actions/orders'

let initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_PENDING:
      return state
    case FETCH_ORDERS_SUCCESS:
      return [...action.payload.data.orders]
    case FETCH_ORDERS_FAILED:
      return action.payload
    default:
      return state
  }
}