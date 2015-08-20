var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function(){
    if (this.count > 0) {
      var result = this.storage[this.count];
      delete this.storage[this.count];
      this.count --;
      return result;
    }
  },
  size: function(){
    return this.count;
  }
};