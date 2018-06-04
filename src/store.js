import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import fruits from './reducers/fruits'
import orders from './reducers/orders'

let rootReducer = combineReducers({
  fruits: fruits,
  orders: orders
})

export default () => createStore(rootReducer, applyMiddleware(thunk, logger))