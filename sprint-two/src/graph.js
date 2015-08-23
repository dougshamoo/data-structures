

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for (var key in this.storage) {
    if (key === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var nodesToCheck = this.storage[node];
  for (var i = 0; i < nodesToCheck.length; i++) {
    var connectedNodes = this.storage[nodesToCheck[i]];
    for (var j = 0; j < connectedNodes.length ; j++) {
      if (connectedNodes[j] === node) {
        connectedNodes.splice(j, 1);
      }
    }
  }
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      this.storage[fromNode].splice(i, 1);
    }
  }

  for (var j = 0; j < this.storage[toNode].length; j++) {
    if (this.storage[toNode][j] === fromNode) {
      this.storage[toNode].splice(j, 1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: O(1)
 removeNode: O(n^2)
 hasEdge: O(n)
 addEdge: O(1)
 removeEdge: O(n)
 forEachNode: O(n)
 */
