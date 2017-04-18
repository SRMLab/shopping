const inventoryItems = [
  { _id: 0, name: "Brocolli", unit: "case", _store: "aaa", imagePath: "broccoli.jpg", category: "Vegetables", sku: "V001" },
  { _id: 1, name: "Mushroom", unit: "case", _store: "aaa", imagePath: "mushroom.jpg", category: "Vegetables", sku: "V002" },
  { _id: 2, name: "Cabbage", unit: "case", _store: "aaa", imagePath: "cabbage.jpg", category: "Vegetables", sku: "V003" }
]

import { database } from './firebaseServices'

export function getInventoryItems() {
  return new Promise((resolve, reject) => {
    database.ref('Midori/items')
      .once('value', snap => {
        const items = snap.val()
        resolve(items)
      })
      .catch((err) => { reject(err) })
  })
}

export function getInventoryItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(inventoryItems[id])
    }, 1000)
  })
}

export function insertInventoryItem(item) {
  return new Promise((resolve, reject) => {
    database.ref('Midori/items')
      .push(item)
      .then((res) => resolve(res))
      .catch((err) => { reject(err) })
  })
}

export function getItemImages() {
  return new Promise((resolve, reject) => {
    database.ref('itemImages')
      .once('value', snap => {
        const images = snap.val()
        resolve(images)
      })
      .catch((err) => { reject(err) })
  })
}
