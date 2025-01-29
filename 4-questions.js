function areBracketsBalanced (str) {
  const stack = []
  const matchingBrackets = { ')': '(', ']': '[', '}': '{' }

  for (const char of str) {
    if (/[({[]/.test(char)) {
      stack.push(char)
    } else if (/[)}\]]/.test(char)) {
      if (stack.pop() !== matchingBrackets[char]) {
        return false
      }
    }
  }

  return stack.length === 0
}

// Tests
console.log(areBracketsBalanced('{[]}')) // true
console.log(areBracketsBalanced('{(])}')) // false
console.log(areBracketsBalanced('{([)]}')) // false
console.log(areBracketsBalanced('[]')) // true
console.log(areBracketsBalanced('{}')) // true
console.log(areBracketsBalanced('()')) // true
console.log(areBracketsBalanced('{]}')) // false
