import {
  FETCH_INVENTORY_ITEMS_REQUEST, 
  FETCH_INVENTORY_ITEMS_FAILURE, 
  FETCH_INVENTORY_ITEMS_SUCCESS, 
  ADD_INVENTORY_ITEM_REQUEST,
  ADD_INVENTORY_ITEM_FAILURE,
  ADD_INVENTORY_ITEM_SUCCESS,
  FETCH_REFERENCES_SUCCESS, 
} from '../constants'

import {
  getInventoryItems,
  insertInventoryItem,
  getItemImages,
  getCategories,
  getShops,
} from './api'

import { browserHistory } from 'react-router';

function fetchInventoryItemsSuccess(items) {
  return {
    type: FETCH_INVENTORY_ITEMS_SUCCESS,
    items,
  }
}

function addInventoryItemSuccess(data) {
  return {
    type: ADD_INVENTORY_ITEM_SUCCESS,
    data,
  }
}

function fetchReferencesSuccess(images, categories, shops) {
  return {
    type: FETCH_REFERENCES_SUCCESS,
    images,
    categories,
    shops
  }
}

export function fetchInventoryItems() {
  return (dispatch) => {
    dispatch({ type: FETCH_INVENTORY_ITEMS_REQUEST })
    getInventoryItems()
      .then((data) => {
        console.log(data)     
        dispatch(fetchInventoryItemsSuccess(data))
      })
      .catch((err) => {
        dispatch({ type: FETCH_INVENTORY_ITEMS_FAILURE })
        console.log('err:', err);
      })
  }
}

export function fetchReferences() {
  return (dispatch) => {
    Promise.all([
      getItemImages(),
      getCategories(),
      getShops()
    ])
    .then((data) => {
      dispatch(fetchReferencesSuccess(data[0], data[1], data[2]))
    })
    .catch((err) => {
      console.log('err:', err);
    })
  }
}

export function addInventoryItem(item) {
  console.log(item)
  return (dispatch) => {
    dispatch({ type: ADD_INVENTORY_ITEM_REQUEST })
    insertInventoryItem(item)
      .then(() => {
        dispatch(addInventoryItemSuccess(item))
        browserHistory.push('/inventory')
      })
      .catch((err) => {
        dispatch({ type: ADD_INVENTORY_ITEM_FAILURE })
        console.log('err:', err);
      })
  }
}

