import { database } from './firebaseServices'
import _ from 'lodash/core'
const store = database.ref('Midori')

export function getInventoryItems() {
  return new Promise((resolve, reject) => {
    store.child('inventory')
      .once('value', snap => {
        const items = _.reduce(snap.val(), (res, item) => { res.push(item); return res } , [])
        resolve(items)
      })
      .catch((err) => { reject(err) })
  })
}

export function insertInventoryItem(item) {
  return new Promise((resolve, reject) => {
    store.child('inventory')
      .push(item)
      .then((res) => resolve(res))
      .catch((err) => { reject(err) })
  })
}

export function getItemImages() {
  return new Promise((resolve, reject) => {
    database.ref('itemImages')
      .once('value', snap => {
        const images = _.reduce(snap.val(), (res, item) => { res.push(item); return res } , [])
        resolve(images)
      })
      .catch((err) => { reject(err) })
  })
}

export function getCaterories() {
  return new Promise((resolve, reject) => {
    store.child('categories')
      .once('value', snap => {
        const categories = _.reduce(snap.val(), (res, item) => { res.push(item); return res } , [])
        resolve(categories)
      })
      .catch((err) => { reject(err) })
  })
}
