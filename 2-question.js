async function writeItemsWithDelay (array) {
  let delay = 1000

  for (const item of array) {
    console.log(item)
    await new Promise(resolve => setTimeout(resolve, delay))
    delay *= 2
  }
}

// Test
const items = ['A', 'B', 'C', 'D']
writeItemsWithDelay(items)
// output:
// A (após 1 segundo)
// B (após mais 2 segundos)
// C (após mais 4 segundos)
// D (após mais 8 segundos)
