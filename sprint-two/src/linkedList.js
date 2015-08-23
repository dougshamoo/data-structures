var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    }
    if (list.tail !== null) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var result = list.head;
    list.head = result.next;
    return result.value;
  };

  list.contains = function(target, current){
    if (current === null) {
      return false;
    }
    if (current === undefined) {
      current = list.head;
    }
    //base case
    if (current.value === target) {
      return true;
    }
    //recursive
    return list.contains(target, current.next);
  };
  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 */
