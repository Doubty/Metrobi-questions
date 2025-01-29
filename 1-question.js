function findDuplicates (array) {
  const seen = new Set()
  const duplicates = new Set()

  for (const item of array) {
    const identifier =
      typeof item === 'object' && item !== null ? JSON.stringify(item) : item

    if (seen.has(identifier)) {
      duplicates.add(identifier)
    } else {
      seen.add(identifier)
    }
  }

  return Array.from(duplicates).map(duplicate => {
    if (
      typeof duplicate === 'string' &&
      (duplicate.startsWith('{') || duplicate.startsWith('['))
    ) {
      return JSON.parse(duplicate)
    }
    return duplicate
  })
}

// Tests
const array1 = [1, 2, 3, 1, 2, 4]
console.log(findDuplicates(array1)) // [1, 2]

const array2 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
]
console.log(findDuplicates(array2))
// [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]

const array3 = [1, '1', { id: 1 }, { id: 1 }, 1]
console.log(findDuplicates(array3))
// [1, { id: 1 }]
