function findHighestSafeFloor (totalFloors) {
  let step = Math.ceil((Math.sqrt(1 + 8 * totalFloors) - 1) / 2)
  let currentFloor = 0
  let previousFloor = 0

  while (currentFloor + step <= totalFloors) {
    previousFloor = currentFloor
    currentFloor += step
    step--

    if (isEggBroken(currentFloor)) {
      break
    }
  }

  for (let i = previousFloor + 1; i < currentFloor; i++) {
    if (isEggBroken(i)) {
      return i - 1
    }
  }

  return currentFloor
}

function isEggBroken (floor) {
  const highestSafeFloor = 73
  return floor > highestSafeFloor
}

// Test
console.log(findHighestSafeFloor(100)) // 73
