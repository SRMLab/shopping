import { 
  FETCH_INVENTORY_ITEMS_REQUEST, 
  FETCH_INVENTORY_ITEMS_FAILURE, 
  FETCH_INVENTORY_ITEMS_SUCCESS, 
  ADD_INVENTORY_ITEM_REQUEST,
  ADD_INVENTORY_ITEM_FAILURE,
  ADD_INVENTORY_ITEM_SUCCESS,
} from '../constants'

const initialState = {
  items: [],
  isFetching: false,
  error: false,
}

export default function inventory(state=initialState, action){
  switch (action.type) {
    case FETCH_INVENTORY_ITEMS_REQUEST:
      return {
        ...state,
        items: [],
        isFetching: true
      }
    case FETCH_INVENTORY_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case FETCH_INVENTORY_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data
      }
    case ADD_INVENTORY_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ADD_INVENTORY_ITEM_FAILURE:
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
        items: newData
      }
    default:
      return state
  }
}
