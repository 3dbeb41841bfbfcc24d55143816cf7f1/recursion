# Recursion

## What is Recursion?

* The repeated application of a recursive procedure or definition.
* A function may be partly defined in terms of itself. A familiar example is the Fibonacci number sequence: F(n) = F(n − 1) + F(n − 2). For such a definition to be useful, it must lead to non-recursively defined values, in this case F(0) = 0 and F(1) = 1.
* Recursion, see Recursion.

## Examples

### Fibonacci Numbers

```javascript
function fib(n) {
  return n < 2 ? n : fib(n-1) + fib(n-2);
}

console.log(fib(10));    // 55
```

### Factorial

```javascript
/*
Recursion works here because the factorial of n is equal to
n * the factorial of (n-1), i.e.
n! = n * (n-1)!
*/
function fact(n) {
  return n < 2 ? n : n * fact(n-1);
}

console.log(fact(5));    // 120
```

### Depth First Traversal of a Tree Data Structure

```javascript
function dfs(node, callback) {
  if (node) {
    dfs(node.left, callback);
    callback(node);
    dfs(node.right, callback);
  }
}

function print(node) {
  console.log(node.value);
}

// read the tree data from a file
var data = require('./tree-data.js');

// print the tree data
dfs(data, print);

// sum up all of the values from the tree data
var sum = 0;
dfs(data, function(node) { sum += node.value });
console.log('sum:', sum);

// muliply each value by 3 and print it out again
dfs(data, function(node) { node.value = node.value * 3 });
dfs(data, print);
```


## References
* [Recursion Made Simple](http://www.codeproject.com/Articles/32873/Recursion-made-simple)
