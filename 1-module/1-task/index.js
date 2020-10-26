/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let factorial = 1;
  while (n > 0) {
    factorial *= n--;
  }
  return factorial
}
