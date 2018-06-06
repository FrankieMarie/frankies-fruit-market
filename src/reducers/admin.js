import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGOUT
} from '../actions/admin'

let initialState = {
  admin: {},
  err: {},
  isAuthed: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS:
      localStorage.setItem('admin', JSON.stringify(action.payload.admin))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      return {
        ...state,
        admin: action.payload,
        isAuthed: true
      }
    case ADMIN_LOGIN_FAILED:
      return {
        ...state,
        err: action.payload
      }
    case ADMIN_LOGOUT:
      return {
        ...initialState
      }
    default:
      return state
  }
}