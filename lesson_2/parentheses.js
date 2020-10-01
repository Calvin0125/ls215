function isBalanced(string) {
  let parenCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      parenCount += 1;
    } else if (string[i] === ')') {
      parenCount -= 1;
    }

    if (parenCount < 0) {
      return false;
    }
  }

  return parenCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
