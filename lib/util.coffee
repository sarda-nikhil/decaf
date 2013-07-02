this.getFunctionName = (fun) ->
        ret = fun.toString()
        ret = ret.substr('function '.length);
        ret.substr(0, ret.indexOf('('));

this.getHash = (o) ->
        o = o.toString()
        hash = 0
        if o.length is 0
            hash
        else
            for i in o
                hash = ((hash<<5)-hash)+i.charCodeAt()
                hash = hash & hash
            hash
