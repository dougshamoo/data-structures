var BinarySearchTree = function(value){
  var bst = {};
  bst.value = value;
  bst.left = null;
  bst.right  = null;
  _.extend(bst, binaryMethods);
  return bst;
};

binaryMethods = {
  insert: function (value) {
    var newBst = BinarySearchTree(value);
    if (value < this.value) {
      // if left is null, assign
      // otherwise, try to insert on left node
      if (this.left === null) {
        this.left = newBst;
      }
      else {
        this.left.insert(value);
      }
    }
    else if (value > this.value) {
      if (this.right === null) {
         this.right = newBst;
      }
      else {
        this.right.insert(value);
      }
    }
  },
  contains: function(target) {
    if (this.value === target) {
      return true;
    }
    else {
      if (this.left && target < this.value) {
        return this.left.contains(target);
      }
      else if (this.right && target > this.value) {
        return this.right.contains(target);
      }
    }
    return false;
  },
  depthFirstLog: function(cb) {
    cb(this.value);
    var children = [this.left, this.right];
    for (var i = 0; i < children.length; i++) {
      if (children[i]) {
        children[i].depthFirstLog(cb);
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n))
 contains: O(log(n))
 depthFirstLog: O(n)
 */
