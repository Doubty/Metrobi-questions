function getMaxValue (carrotTypes, capacity) {
  let myBag = new Array(capacity + 1).fill(0)

  for (let i = 0; i < carrotTypes.length; i++) {
    let { kg, price } = carrotTypes[i]

    for (let w = kg; w <= capacity; w++) {
      myBag[w] = Math.max(myBag[w], myBag[w - kg] + price)
    }
  }

  return myBag[capacity]
}

// Test:
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 }
]
const capacity = 36
console.log('Max: ', getMaxValue(carrotTypes, capacity)) // 840
