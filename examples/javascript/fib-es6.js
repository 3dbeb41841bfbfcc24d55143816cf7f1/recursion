const fib = n => n < 2 ? n : fib(n - 2) + fib(n - 1);

console.log('fib(8) = ' + fib(8));
