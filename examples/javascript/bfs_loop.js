// BFS: uses an array as a FIFO Queue - Loop Algorithm
function bfs_loop(node, callback) {
  var q = [node];
  while (q.length > 0) {
    node = q.shift();
    if (node) {
      callback(node);
      q.push(node.left);
      q.push(node.right);
    }
  }
}

var data = require('./tree-data.js');
bfs_loop(data, function(n) {
  console.log(n.value);
});
