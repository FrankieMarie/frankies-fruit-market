import { FETCH_ORDERS_PENDING, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILED, ADD_TO_ORDER, DELETE_FROM_ORDER } from '../actions/orders'

let initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_PENDING:
      return state
    case FETCH_ORDERS_SUCCESS:
      return [...action.payload.data.orders]
    case FETCH_ORDERS_FAILED:
      return action.payload
    case ADD_TO_ORDER:
      return [...state, action.payload]
    case DELETE_FROM_ORDER:
      return [...state, action.payload]
    default:
      return state
  }
}