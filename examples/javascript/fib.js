function fib(n) {
  switch (n) {
    case 0: return 0;
    case 1: return 1;
    default: return fib(n - 2) + fib(n - 1);
  }
}

// for (var i=0; i<=10; i++) {
//   console.log("fib(" + i + ") = " + fib(i));
// }

console.log('fib(8) = ' + fib(8));
