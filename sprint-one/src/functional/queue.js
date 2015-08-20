var Queue = function(){
  var someInstance = {};
  var count = 0;
  var oldest = 0;
  var newest = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){

    storage[newest] = value;
    count ++;
    newest ++;
  };

  someInstance.dequeue = function(){
    if (count > 0) {
      count --;

      var result = storage[oldest];
      delete storage[oldest];
      oldest ++;
      if (count === 0) {
        oldest = 0;
        newest = 0;
      }
      return result;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
