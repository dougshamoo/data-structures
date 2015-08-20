var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.oldest = 0;
  this.newest = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.newest] = value;
  this.count ++;
  this.newest ++;
}

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    this.count --;

    var result = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest ++;
    if (this.count === 0) {
      this.oldest = 0;
      this.newest = 0;
    }
    return result;
  }
}

Queue.prototype.size = function() {
  return this.count;
}
