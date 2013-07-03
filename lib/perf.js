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

  this.retry_delay = function(tries, delay, backoff) {
    if (delay == null) delay = 2;
    if (backoff == null) backoff = 3;
    return function(base) {
      return function() {
        var mdelay, mtries, __value__, _results;
        mtries = tries;
        mdelay = delay;
        try {
          if (mtries > 0) base.apply(this, argument);
          return mtries -= 1;
        } catch (error) {
          _results = [];
          while (mtries > 0) {
            setTimeout(__value__ = base.apply(this, argument), mdelay);
            if (__value__ != null) break;
            mdelay *= backoff;
            _results.push(mtries -= 1);
          }
          return _results;
        }
      };
    };
  };

  this.deprecated = basic.before(function() {
    return console.log("Warning! Function has been deprecated");
  });

}).call(this);
