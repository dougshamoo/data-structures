var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = null;
};

setPrototype.contains = function(item){
  return (item in this._storage);
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1)
 contains: O(n)
 remove: O(1)
 */
