const inventoryItems = [
  { name: "Brocolli", unit: "case", _store: "aaa", imagePath: "broccoli.jpg" },
  { name: "Mushroom", unit: "case", _store: "aaa", imagePath: "mushroom.jpg" },
  { name: "Cabbage", unit: "case", _store: "aaa", imagePath: "cabbage.jpg" }
]

export function getInventoryItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(inventoryItems)
    }, 3000)
  })
}

export function insertInventoryItem(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newItem = {...item, _store: 'aaa'}
      inventoryItems.push(newItem)
      return resolve(newItem)
    }, 3000)
  })
}
