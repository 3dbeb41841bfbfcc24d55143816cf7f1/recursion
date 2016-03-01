/*
The factorial of n = n!  is equal to n * the factorial of (n-1)
n! = n * (n-1)!
*/

function fact(n) {
  console.log('fact called with n =', n);
  var result = n === 1 ? 1 : n * fact(n-1);
  console.log('fact returning result', result);
  return result;
}

console.log("the factorial of 5 is:", fact(5));
