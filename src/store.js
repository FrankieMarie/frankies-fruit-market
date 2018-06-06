import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import fruits from './reducers/fruits'
import orders from './reducers/orders'
import images from './reducers/images'
import admin from './reducers/admin'

let rootReducer = combineReducers({
  fruits: fruits,
  orders: orders,
  images: images,
  admin: admin
})

export default () => createStore(rootReducer, applyMiddleware(thunk, logger))