function foo(a, b) {
  // Check if both arguments are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Perform numerical addition
  } else {
    // Handle non-numeric arguments appropriately (e.g., throw an error or return a specific value)
    console.error("Both arguments must be numbers");
    return NaN;
  }
}
console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // Error message
console.log(foo(1, [2])); // Error message