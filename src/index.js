import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

import { fetchFruits } from './actions/fruits'
import { fetchOrders } from './actions/orders'
import { fetchImages } from './actions/images';

let newStore = store()
newStore.dispatch(fetchFruits())
newStore.dispatch(fetchOrders())
newStore.dispatch(fetchImages())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>
  , document.getElementById('root'))
