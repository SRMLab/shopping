import { 
  ASYNC_REQUEST,
  ASYNC_FAILURE,
  FETCH_ITEM_IMAGES_SUCCESS,
} from '../constants'

const initialState = {
  images: [],
  isFetching: false,
  error: false,
}

export default function itemImages(state=initialState, action){
  switch (action.type) {
    case ASYNC_REQUEST:
      return {
        ...state,
        images: [],
        isFetching: true
      }
    case ASYNC_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case FETCH_ITEM_IMAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        images: action.data
      }
    default:
      return state
  }
}
