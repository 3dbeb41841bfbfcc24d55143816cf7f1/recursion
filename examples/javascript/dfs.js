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

// count the number of leaf nodes
var numLeafNodes = 0;
dfs(data, function(n) {
  if (!n.left && !n.right) {
    numLeafNodes += 1;
  }
});
console.log('Num Leaf Nodes: ' + numLeafNodes);
