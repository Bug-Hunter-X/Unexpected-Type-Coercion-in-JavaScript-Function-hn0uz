function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  return a + b; // Assume a and b are numbers
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo('1',2)); //Uncaught TypeError: Cannot convert value of type string to number