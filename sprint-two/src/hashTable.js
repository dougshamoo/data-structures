var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    var currentBucket = this._storage.get(i);
    var found = false;
    for (var i = 0; i < currentBucket.length; i++) {
      var tuple = currentBucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
        found = true;
        break;
      }
    }
    if (!found) {
      currentBucket.push([k, v]);
      this._storage.set(i, currentBucket);
      this._count++;
    }
  } else {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(i, bucket);
    this._count++;
  }
  // resize if needed
  if (this._count > 0.75 * this._limit) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._count--;
      //resize if needed
      if (this._count < 0.25 * this._limit) {
        this.resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit)
  this._limit = newLimit;
  this._count = 0;
  var that = this;
  oldStorage.each(function(bucket, index) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        that.insert(tuple[0], tuple[1]);
      }
    }
  });
}

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(n)
 remove:  O(n)
 resize: O(n)
 */
