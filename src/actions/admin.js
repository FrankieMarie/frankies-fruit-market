import axios from 'axios'

export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS'
export const ADMIN_LOGIN_FAILED = 'ADMIN_LOGIN_FAILED'

export const ADMIN_LOGOUT = 'ADMIN_LOGOUT'

export const adminLogin = (creds, history) => {
  return async dispatch => {
    try {
      let response = await axios.post(`http://localhost:8000/admin/login`, creds)
      let admin = response.data
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: admin
      })
      history.push('/')
    } catch (err) {
      dispatch({
        type: ADMIN_LOGIN_FAILED,
        payload: err
      })
      history.push('/login')
    }
  }
}

export const adminLogout = () => {
  return dispatch => {
    dispatch({
      type: ADMIN_LOGOUT
    })
  }
}