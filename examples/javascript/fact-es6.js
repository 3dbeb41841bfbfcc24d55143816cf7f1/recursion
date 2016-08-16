const fact = n => n === 1 ? 1 : n * fact(n-1);

console.log("the factorial of 5 =", fact(5));
