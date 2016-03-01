// BFS: uses an array as a FIFO Queue - Recursive Algorithm
function bfs(node, callback, queue) {
  if (!queue) {
    queue = [node];
  }
  node = queue.shift();
  if (node) {
    callback(node);
    queue.push(node.left);
    queue.push(node.right);
  }
  if (queue.length > 0) {
    bfs(null, callback, queue);
  }
}

// read the tree data from a file
var data = require('./tree-data.js');
bfs(data, function(n) {
  console.log(n.value);
});

