basic = require './basic.js'
util = require './util.js'

# Basic memoized
this.memoized = (base) ->
    memos = {}
    ->
      key = util.getHash(JSON.stringify(arguments))
      if memos.hasOwnProperty(key)
        memos[key]
      else
        memos[key] = base.apply(this, arguments)

# TTL cached
this.ttlCache = (ttl) ->
    (base) ->
        t = null
        cachedVal = null
        ->
          if not cachedVal?
            t = new Date().getTime
            cachedVal = base.apply(this, arguments)
          else
            _temp = new Date().getTime
            if t + ttl < _temp
                t = _temp
                cachedVal = base.apply(this, arguments)
          cachedVal
