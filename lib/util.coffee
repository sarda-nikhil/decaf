this.getFunctionName = (fun) ->
        ret = fun.toString()
        ret = ret.substr('function '.length);
        ret.substr(0, ret.indexOf('('));
