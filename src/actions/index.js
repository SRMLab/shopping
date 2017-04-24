import {
  FETCH_INVENTORY_ITEMS_REQUEST, 
  FETCH_INVENTORY_ITEMS_FAILURE, 
  FETCH_INVENTORY_ITEMS_SUCCESS, 
  ADD_INVENTORY_ITEM_REQUEST,
  ADD_INVENTORY_ITEM_FAILURE,
  ADD_INVENTORY_ITEM_SUCCESS,
  FETCH_ITEM_IMAGES_REQUEST, 
  FETCH_ITEM_IMAGES_FAILURE, 
  FETCH_ITEM_IMAGES_SUCCESS, 
} from '../constants'

import {
  getInventoryItems,
  insertInventoryItem,
  getItemImages,
}from './api'

import { browserHistory } from 'react-router';

function fetchInventoryItemsSuccess(data) {
  return {
    type: FETCH_INVENTORY_ITEMS_SUCCESS,
    data,
  }
}

function addInventoryItemSuccess(data) {
  return {
    type: ADD_INVENTORY_ITEM_SUCCESS,
    data,
  }
}

function fetchItemImagesSuccess(data) {
  return {
    type: FETCH_ITEM_IMAGES_SUCCESS,
    data,
  }
}

export function fetchInventoryItems() {
  return (dispatch) => {
    dispatch({ type: FETCH_INVENTORY_ITEMS_REQUEST })
    getInventoryItems()
      .then((data) => {
        dispatch(fetchInventoryItemsSuccess(data))
      })
      .catch((err) => {
        dispatch({ type: FETCH_INVENTORY_ITEMS_FAILURE })
        console.log('err:', err);
      })
  }
}

export function addInventoryItem(item) {
  return (dispatch) => {
    dispatch({ type: ADD_INVENTORY_ITEM_REQUEST })
    insertInventoryItem(item)
      .then((data) => {
        dispatch(addInventoryItemSuccess(data))
        browserHistory.push('/inventory')
      })
      .catch((err) => {
        dispatch({ type: ADD_INVENTORY_ITEM_FAILURE })
        console.log('err:', err);
      })
  }
}

export function fetchItemImages() {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEM_IMAGES_REQUEST })
    getItemImages()
      .then((data) => {
        dispatch(fetchItemImagesSuccess(data))
      })
      .catch((err) => {
        dispatch({ TYPE: FETCH_ITEM_IMAGES_FAILURE })
        console.log('err:', err);
      })
  }
}

