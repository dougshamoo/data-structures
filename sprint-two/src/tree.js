var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  else {
    for (var i=0; i < this.children.length; i++) {

      var found = this.children[i].contains(target);
      if (found === false) {
        continue;
      }

      return found;
    }
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
