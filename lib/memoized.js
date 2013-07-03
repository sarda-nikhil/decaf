(function() {
  var basic, util;

  basic = require('./basic.js');

  util = require('./util.js');

  this.memoized = function(base) {
    var memos;
    memos = {};
    return function() {
      var key;
      key = util.getHash(JSON.stringify(arguments));
      if (memos.hasOwnProperty(key)) {
        return memos[key];
      } else {
        return memos[key] = base.apply(this, arguments);
      }
    };
  };

  this.ttlCache = function(ttl) {
    return function(base) {
      var cachedVal, t;
      t = null;
      cachedVal = null;
      return function() {
        var _temp;
        if (!(cachedVal != null)) {
          t = new Date().getTime;
          cachedVal = base.apply(this, arguments);
        } else {
          _temp = new Date().getTime;
          if (t + ttl < _temp) {
            t = _temp;
            cachedVal = base.apply(this, arguments);
          }
        }
        return cachedVal;
      };
    };
  };

}).call(this);
