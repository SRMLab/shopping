const inventoryItems = [
  { _id: 0, name: "Brocolli", unit: "case", _store: "aaa", imagePath: "broccoli.jpg", category: "Vegetables", sku: "V001" },
  { _id: 1, name: "Mushroom", unit: "case", _store: "aaa", imagePath: "mushroom.jpg", category: "Vegetables", sku: "V002" },
  { _id: 2, name: "Cabbage", unit: "case", _store: "aaa", imagePath: "cabbage.jpg", category: "Vegetables", sku: "V003" }
]

export function getInventoryItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(inventoryItems)
    }, 1000)
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
    setTimeout(() => {
      const newItem = {...item, _store: 'aaa'}
      inventoryItems.push(newItem)
      return resolve(newItem)
    }, 1000)
  })
}
