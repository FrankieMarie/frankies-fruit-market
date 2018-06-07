import axios from 'axios'

export const FETCH_FRUITS_PENDING = "FETCH_FRUITS_PENDING"
export const FETCH_FRUITS_SUCCESS = "FETCH_FRUITS_SUCCESS"
export const FETCH_FRUITS_FAILED = "FETCH_FRUITS_FAILED"

export const ADD_FRUIT_SUCCESS = "ADD_FRUIT_SUCCESS"
export const ADD_FRUIT_FAILED = "ADD_FRUIT_FAILED"

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

export const addFruit = (fruit) => {
  return async dispatch => {
    try{
      let authHeader = 'Bearer ' + JSON.parse(localStorage.getItem('admin')).token;
      let formData = new FormData();
      for(let key in fruit){
        formData.append(key,fruit[key])
      }
      let newFruit = await axios.post(`http://localhost:8000/fruits`, formData, { headers: { Authorization: authHeader}})
      dispatch({
        type: ADD_FRUIT_SUCCESS,
        payload: newFruit
      })
    }catch(err) {
      dispatch({
        type: ADD_FRUIT_FAILED,
        payload: err
      })
    }
   }
}