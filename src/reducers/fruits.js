import {
  FETCH_FRUITS_PENDING,
  FETCH_FRUITS_SUCCESS,
  FETCH_FRUITS_FAILED,
  ADD_FRUIT_SUCCESS,
  ADD_FRUIT_FAILED,
  DELETE_FRUIT,
  UPDATE_FRUIT_SUCCESS,
  UPDATE_FRUIT_FAILED } from '../actions/fruits'

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRUITS_PENDING:
      return state
    case FETCH_FRUITS_SUCCESS:
      return [...action.payload.data.fruits]
    case FETCH_FRUITS_FAILED:
      return action.payload
    case ADD_FRUIT_SUCCESS:
      return [...state, action.payload.data.fruits]
    case ADD_FRUIT_FAILED:
      return action.payload
    case DELETE_FRUIT:
      return [...state.filter(val => val._id !== action.payload.fruitId)]
    case UPDATE_FRUIT_SUCCESS:
      return [...state, action.payload.data.fruits]
    case UPDATE_FRUIT_FAILED:
    return action.payload
    default:
      return state
  }
}