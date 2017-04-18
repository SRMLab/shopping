import {
  ASYNC_REQUEST, 
  ASYNC_FAILURE,
  FETCH_INVENTORY_ITEMS_SUCCESS, 
  FETCH_ITEM_IMAGES_SUCCESS, 
  ADD_INVENTORY_ITEM_SUCCESS,
} from '../constants'

import {
  getInventoryItems,
  getInventoryItem,
  insertInventoryItem,
  getItemImages,
}from './api'

import { browserHistory } from 'react-router';

export function asyncRequest() {
  return {
    type: ASYNC_REQUEST
  }
}

export function asyncFailure() {
  return {
    type: ASYNC_FAILURE
  }
}

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
    dispatch(asyncRequest())
    getInventoryItems()
      .then((data) => {
        dispatch(fetchInventoryItemsSuccess(data))
      })
      .catch((err) => {
        dispatch(asyncFailure())
        console.log('err:', err);
      })
  }
}

export function addInventoryItem(item) {
  return (dispatch) => {
    dispatch(asyncRequest())
    insertInventoryItem(item)
      .then((data) => {
        dispatch(addInventoryItemSuccess(data))
        browserHistory.push('/inventory')
      })
      .catch((err) => {
        dispatch(asyncFailure())
        console.log('err:', err);
      })
  }
}

export function fetchItemImages() {
  return (dispatch) => {
    dispatch(asyncRequest())
    getItemImages()
      .then((data) => {
        dispatch(fetchItemImagesSuccess(data))
      })
      .catch((err) => {
        dispatch(asyncFailure())
        console.log('err:', err);
      })
  }
}

