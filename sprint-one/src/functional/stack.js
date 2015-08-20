var Stack = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    count ++;
    storage[count] = value;
  };

  someInstance.pop = function(){
    if (count > 0) {
      var result = storage[count];
      delete storage[count];
      count --;
      return result;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
