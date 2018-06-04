import axios from 'axios'

export const FETCH_FRUITS_PENDING = "FETCH_FRUITS_PENDING"
export const FETCH_FRUITS_SUCCESS = "FETCH_FRUITS_SUCCESS"
export const FETCH_FRUITS_FAILED = "FETCH_FRUITS_FAILED"

export const fetchFruits = () => {
  return async dispatch => {
    try{
      dispatch({
        type: FETCH_FRUITS_PENDING
      })
      let fruits = await axios.get("http://localhost:8000/fruits")
      dispatch({
        type: FETCH_FRUITS_SUCCESS,
        payload: fruits
      })
    } catch(err) {
      dispatch({
        type: FETCH_FRUITS_FAILED,
        payload: err
      })
    }
  }
}