# Recursion

## Review - Function Calls and the Call Stack

First let's review function calls and the call stack.
If we have 3 functions named `foo`, `bar`, and `baz` where `foo` calls `bar`
and `bar` calls `baz` we can illustrate the call graph as:

  foo --> bar --> baz

Now let's assume that each method takes an integer argument. In Ruby we might
have something like this:

```ruby
def foo(x)
  bar(x+1)    # add 1 to x and pass the result to bar, then return the result
end

def bar(y)
  baz(y*10)   # multiply y by 10 and pass the result to baz, then return the result
end

def baz(z)
  z + 2
end

puts "The answer is: #{foo(3)}"
```

Most modern languages have a `call stack` where the function arguments and
return values are temporarily stored during function calls and returns.

## Intro to Recursion

Recursion is when a function calls itself either directly or indirectly. A
call stack might look like this:

  foo --> foo --> foo --> foo     // direct recursion

or like this:

  foo --> bar --> foo --> bar     // indirect recursion

This kind of call stack must terminate at some point or else the program will
attempt to perform infinite recursion and will crash with a *stack overflow*
error. Now you know the origin of the popular website
[Stack Overflow](http://stackoverflow.com/)

### Example - Factorial

The *factorial* of a number N is defined as:

fact(n) = n * n-1 * n-2 * ... * 1

which can be refactored as:

fact(n) = n * fact(n-1)

So we can use recursion to determine `fact(n)` in terms of `n * fact(n-1)`.
To make this work, we need a terminating condition where we stop the recursion.
We will use `fact(1) = 1` as our terminating condition.

The result is the following:

> fact1.rb

```ruby
def fact(n)
  if n == 1
    return 1
  else
    return n * fact(n-1)
  end
end
```

which can be simplified to this:

> fact2.rb

```ruby
def fact(n)
  n > 1 ? n * fact(n-1) : 1
end
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

Note that we go 5 levels deep into recursion before any multiplications occur.

## Short Lab

Write the factorial program in JavaScript


## Example 2 - Depth First Search (DFS)

Given a sorted binary tree of nodes containing integer values, print the
integers in ascending order.

Sample Input:

12 --> 6, 22
6  --> 2, 9
2  --> nil, 5
9  --> 7, nil
22 --> 15, 40
15 --> 13, 18
13 --> nil, nil
18 --> 16, 19
40 --> nil, nil

Output: 2, 5, 6, 7, 9, 12, 13, 15, 16, 18, 19, 22, 40

```javascript
// DFS: uses the call stack as a LIFO Stack
function dfs(node, callback) {
  if (!node) {
    return;
  }
  dfs(node.left);     // recursion to process left child
  callback(node);     // process node
  dfs(node.right);    // recursion to process right child
}
```

## Short Lab

Write DFS in Ruby

## Longer Lab

Implement BFS in JavaScript and in Ruby

> Hint: you will need a FIFO Queue to temporarily store the nodes as you
recurse. In both `JavaScript` and `Ruby` you can use an Array with the
`push` and `shift` methods to add to the end and remove from the front of the
array.
