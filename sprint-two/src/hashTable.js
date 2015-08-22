var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    var newBucket = this._storage.get(i);
    newBucket[k] = v;
    this._storage.set(i, newBucket);
  } else {
    var bucket = {};
    bucket[k] = v;
    this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var key in bucket) {
    if (key === k) {
      return bucket[key];
    }
  }
  return null;
};

//[{'Steven':'Seagal'},,,,]

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var key in bucket) {
    if (key === k) {
      delete bucket[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(n)
 remove:  O(n)
 */
