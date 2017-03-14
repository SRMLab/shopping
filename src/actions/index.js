import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../constants'

import {
  getInventoryItems,
  getInventoryItem,
  insertInventoryItem
}from './api'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getInventoryItems()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}

export function getInventoryItemSuccess(data) {
  return {
    type: FETCHING_INVENTORY_ITEM_SUCCESS,
    data,
  }
}

export function fetchInventoryItem(id) {
  return (dispatch) => {
    dispatch(getData())
    getInventoryItem(id)
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}

export function addInventoryItem(item) {
  return (dispatch) => {
    dispatch(getData())
    insertInventoryItem(item)
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}
