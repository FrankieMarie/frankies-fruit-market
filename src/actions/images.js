import axios from 'axios'

export const FETCH_IMAGES_PENDING = "FETCH_IMAGES_PENDING"
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS"
export const FETCH_IMAGES_FAILED = "FETCH_IMAGES_FAILED"

export const fetchImages = () => {
  return async dispatch => {
    try{
      dispatch({
        type: FETCH_IMAGES_PENDING
      })
      let images = await axios.get("http://localhost:8000/images")
      dispatch({
        type: FETCH_IMAGES_SUCCESS,
        payload: images
      })
    } catch(err) {
      dispatch({
        type: FETCH_IMAGES_FAILED,
        payload: err
      })
    }
  }
}