function foo(a, b) {
  //Explicit type checking to handle number and null inputs
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return null; 
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo('1',2)); // null