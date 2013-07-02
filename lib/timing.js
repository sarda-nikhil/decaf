(function() {
  var basic, util;

  basic = require('./basic.js');

  util = require('./util.js');

  this.timer = function(name) {
    return basic.around(function(fn) {
      var ms, t;
      t = new Date().getTime();
      fn();
      ms = new Date().getTime() - t;
      return console.log("Execution of " + name + " - " + (ms.toString()) + "ms");
    });
  };

  this.logStart = function(name) {
    return basic.before(function(fn) {
      var t;
      t = new Date().getTime();
      return console.log("Execution of " + name + " started at " + (t.toString()));
    });
  };

  this.logEnd = function(name) {
    return basic.after(function(fn) {
      var t;
      t = new Date().getTime();
      return console.log("Execution of " + name + " ended at " + (t.toString()));
    });
  };

}).call(this);
