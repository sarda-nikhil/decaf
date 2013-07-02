(function() {
  var basic, util;

  basic = require('./basic.js');

  util = require('./util.js');

  this.throttled = function(rate) {
    return function(base) {
      var lastexec;
      lastexec = new Date().getTime();
      return function() {
        var t;
        t = new Date().getTime();
        if (t - lastexec > rate) {
          lastexec = t;
          return base.apply(this, arguments);
        } else {
          return console.log("Rate exceeded");
        }
      };
    };
  };

}).call(this);
