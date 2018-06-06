import axios from 'axios'

export const FETCH_ORDERS_PENDING = "FETCH_ORDERS_PENDING"
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS"
export const FETCH_ORDERS_FAILED = "FETCH_ORDERS_FAILED"

export const ADD_TO_ORDER = "ADD_TO_ORDER"

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

export const addToOrder = (item) => {
  let newItem = {
    fruitId: item,
    quantity: 1
  }
  console.log('blah')
  return (dispatch) => {
    console.log(item)
    axios.post("http://localhost:8000/orders", newItem)
      .then(response => {
        console.log(response.data)
        dispatch({
          type: ADD_TO_ORDER,
          payload: response.data
        })
      })
      .catch(error => {
        throw(error)
      })
  }
}