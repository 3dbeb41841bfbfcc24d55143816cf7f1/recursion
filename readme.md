# Recursion

![Recursion](https://raw.githubusercontent.com/ATL-WDI-Curriculum/intro-to-recursion/master/images/recursion-1.jpg)

## What is Recursion?

* The repeated application of a recursive procedure or definition.
* A function may be partly defined in terms of itself. A familiar example is the Fibonacci number sequence: F(n) = F(n − 1) + F(n − 2). For such a definition to be useful, it must lead to non-recursively defined values, in this case F(0) = 0 and F(1) = 1.
* Recursion, see Recursion.

Recursion is when a function calls itself either directly or indirectly. A
call stack might look like this:

    foo --> foo --> foo --> foo     // direct recursion

or like this:

    foo --> bar --> foo --> bar     // indirect recursion

This kind of call stack must terminate at some point or else the program will
attempt to perform infinite recursion and will crash with a *stack overflow*
error. Now you know the origin of the popular website
[Stack Overflow](http://stackoverflow.com/)

![Recursion Input Output](https://raw.githubusercontent.com/ATL-WDI-Curriculum/intro-to-recursion/master/images/recursion-input-output.png)

## Examples

### Fibonacci Numbers

```javascript
function fib(n) {
  return n < 2 ? n : fib(n-1) + fib(n-2);
}

console.log(fib(10));    // 55
```

### Factorial

The *factorial* of a number N is defined as:

    fact(n) = n * n-1 * n-2 * ... * 1

which can be refactored as:

    fact(n) = n * fact(n-1)

So we can use recursion to determine `fact(n)` in terms of `n * fact(n-1)`.
To make this work, we need a terminating condition where we stop the recursion.
We will use `fact(1) = 1` as our terminating condition.

The result is the following:

```javascript
function fact(n) {
  return n < 2 ? n : n * fact(n-1);
}

console.log(fact(5));    // 120
```

So what is going on here?
Each invocation of fact passes a value of n that is then used to determine
whether to return `1` or multiply `n` times the factorial of `n-1`.

If we diagrammed the call stack for `fact(5)`, it would look like this:

    fact(5) --> fact(4) --> fact(3) --> fact(2) --> fact(1)

and the return values would be:

     5*24         4*6         3*2         2*1
     120          24          6           2           1
     <-- fact(5) <-- fact(4) <-- fact(3) <-- fact(2) <-- fact(1)

Note that we go 5 levels deep into recursion before _any_ multiplications occur.


### Depth First Traversal of a Tree Data Structure

Data structures can have a `recursive` structure, meaning that the data structure is unbound in size and its structure repeats.

![Recursion in Art](https://raw.githubusercontent.com/ATL-WDI-Curriculum/intro-to-recursion/master/images/recursion-art.jpg)

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
