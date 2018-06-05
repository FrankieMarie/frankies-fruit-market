import { FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILED} from '../actions/images'

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_PENDING:
      return state
    case FETCH_IMAGES_SUCCESS:
      return [...action.payload.data.images]
    case FETCH_IMAGES_FAILED:
      return action.payload
    default:
      return state
  }
}