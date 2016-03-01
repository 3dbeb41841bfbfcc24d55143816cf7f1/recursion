function fib_verbose(n) {
  var result;
  switch (n) {
    case 0: result = 0; break;
    case 1: result = 1; break;
    default: result = fib_verbose(n - 2) + fib_verbose(n - 1);
  }
  console.log("fib_verbose: " + n + " ==> " + result);
  return result;
}

// for (var i=0; i<=10; i++) {
//   console.log("===> calling fib_verbose(" + i + ")");
//   fib_verbose(i);
// }

console.log('fib_verbose(8) = ' + fib_verbose(8));
