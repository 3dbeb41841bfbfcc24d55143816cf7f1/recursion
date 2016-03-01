'use strict';

function getIndent(indent) {
  return Array(indent * 2).join(" ");
}

function fact(n, indent) {
  var indent = indent || 0;
  console.log(getIndent(indent) + 'fact(' + n + ') was called.');
  if (n === 1) {
    console.log(getIndent(indent) + 'fact(1): returning 1');
    return 1;
  }
  else {
    console.log(getIndent(indent) + 'fact(' + n + ') calling fact(' + (n-1) + ')...');
    var temp = fact(n-1, indent+1);
    var result = n * temp;
    console.log(getIndent(indent) + 'multiplying n * fact(n-1) = ' + n + ' * ' + temp + ' = ' + result);
    return result;
  }
}

console.log('The factorial of 5 is: ' + fact(5));
