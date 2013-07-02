(function() {
  var basic, util;

  basic = require('./basic.js');

  util = require('./util.js');

  this.countcalls = function(base) {
    var count;
    count = 0;
    return function() {
      count += 1;
      console.log("Function called " + count + " times");
      return base.apply(this, arguments);
    };
  };

  this.logexceptionargs = function(base) {
    var exceptionArgs;
    exceptionArgs = {};
    return function() {
      var key;
      try {
        return base.apply(this, arguments);
      } catch (error) {
        key = util.getHash(JSON.stringify(arguments));
        if (!exceptionArgs.hasOwnProperty(key)) exceptionArgs[key] = arguments;
        console.log("Exception was thrown");
        throw error;
      }
    };
  };

}).call(this);
