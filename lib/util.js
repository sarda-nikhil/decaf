(function() {

  this.getFunctionName = function(fun) {
    var ret;
    ret = fun.toString();
    ret = ret.substr('function '.length);
    return ret.substr(0, ret.indexOf('('));
  };

  this.getHash = function(o) {
    var hash, i, _i, _len;
    o = o.toString();
    hash = 0;
    if (o.length === 0) {
      return hash;
    } else {
      for (_i = 0, _len = o.length; _i < _len; _i++) {
        i = o[_i];
        hash = ((hash << 5) - hash) + i.charCodeAt();
        hash = hash & hash;
      }
      return hash;
    }
  };

}).call(this);
