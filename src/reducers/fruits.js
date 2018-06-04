import { FETCH_FRUITS_PENDING, FETCH_FRUITS_SUCCESS, FETCH_FRUITS_FAILED } from '../actions/fruits'

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRUITS_PENDING:
      return state
    case FETCH_FRUITS_SUCCESS:
      return [...action.payload.data.fruits]
    case FETCH_FRUITS_FAILED:
      return action.payload
    default:
      return state
  }
}