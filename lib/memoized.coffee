basic = require './basic.js'
util = require './util.js'

this.memoized = (base) ->
    memos = {}
    ->
      key = util.getHash(JSON.stringify(arguments))
      if memos.hasOwnProperty(key)
        memos[key]
      else
        memos[key] = base.apply(this, arguments)
