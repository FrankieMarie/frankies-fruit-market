import axios from 'axios'

export const FETCH_ORDERS_PENDING = "FETCH_ORDERS_PENDING"
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS"
export const FETCH_ORDERS_FAILED = "FETCH_ORDERS_FAILED"

export const fetchOrders = () => {
  return async dispatch => {
    try{
      dispatch({
        type: FETCH_ORDERS_PENDING
      })
      let orders = await axios.get("http://localhost:8000/orders")
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
      })
    } catch(err) {
      dispatch({
        type: FETCH_ORDERS_FAILED,
        payload: err
      })
    }
  }
}