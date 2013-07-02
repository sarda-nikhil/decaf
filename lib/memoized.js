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

}).call(this);
