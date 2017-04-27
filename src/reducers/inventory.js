import { 
  FETCH_INVENTORY_ITEMS_REQUEST, 
  // FETCH_INVENTORY_ITEMS_FAILURE, 
  FETCH_INVENTORY_ITEMS_SUCCESS, 
  ADD_INVENTORY_ITEM_REQUEST,
  ADD_INVENTORY_ITEM_FAILURE,
  ADD_INVENTORY_ITEM_SUCCESS,
  FETCH_REFERENCES_SUCCESS,
} from '../constants'

import { orderBy, groupBy } from '../helpers'

const initialState = {
  items: [],
  itemImages: [],
  categories: [],
  shops: [],
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
    // case FETCH_INVENTORY_ITEMS_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true
    //   }
    case FETCH_INVENTORY_ITEMS_SUCCESS:
      action.items.sort(orderBy('name'));
      const items = groupBy(action.items, 'category');
      return {
        ...state,
        isFetching: false,
        items
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
      // let newData = [ action.data, ...state.items ]
      let newData = { ...state.items }
      if (!newData[action.data.category]) newData[action.data.category] = [];
      newData[action.data.category].push(action.data)
      return {
        ...state,
        isFetching: false,
        items: newData
      }
    case FETCH_REFERENCES_SUCCESS:
      return {
        ...state,
        itemImages: action.images,
        categories: action.categories,
        shops: action.shops,
      }
    default:
      return state
  }
}
