import { 
  ASYNC_REQUEST, 
  FETCH_INVENTORY_ITEMS_SUCCESS, 
  ASYNC_FAILURE,
  ADD_INVENTORY_ITEM_SUCCESS,
  FETCH_ITEM_IMAGES_SUCCESS,
} from '../constants'

const initialState = {
  data: {},
  isFetching: false,
  error: false,
  itemImages: {},
}

export default function inventoryItems(state=initialState, action){
  switch (action.type) {
    case ASYNC_REQUEST:
      return {
        ...state,
        data: {},
        isFetching: true
      }
    case FETCH_INVENTORY_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case ASYNC_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case ADD_INVENTORY_ITEM_SUCCESS:
      let newData = { ...state.data, [action.data._id]: action.data }
      return {
        ...state,
        isFetching: false,
        data: newData
      }
    case FETCH_ITEM_IMAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        itemImages: action.data
      }
    default:
      return state
  }
}
