import { 
  FETCH_INVENTORY_ITEMS_REQUEST, 
  // FETCH_INVENTORY_ITEMS_FAILURE, 
  FETCH_INVENTORY_ITEMS_SUCCESS, 
  ADD_INVENTORY_ITEM_REQUEST,
  ADD_INVENTORY_ITEM_FAILURE,
  ADD_INVENTORY_ITEM_SUCCESS,
  MODIFY_INVENTORY_ITEM_SUCCESS,
  FETCH_REFERENCES_SUCCESS,
} from '../constants'
import { v4 } from 'uuid';

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
    // case FETCH_INVENTORY_ITEMS_SUCCESS:
    //   action.items.sort(orderBy('name'));
    //   const items = groupBy(action.items, 'category');
    //   return {
    //     ...state,
    //     isFetching: false,
    //     items
    //   }
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
      let items = { ...state.items }
      items[v4()] = action.item;
      return {
        ...state,
        isFetching: false,
        items
      }
    case MODIFY_INVENTORY_ITEM_SUCCESS:
      // let items = { ...state.items, [state[action.id]]: action.item }
      return {
        ...state,
        isFetching: false,
        items: { ...state.items, [action.id]: action.item }
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
