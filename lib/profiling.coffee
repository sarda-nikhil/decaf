basic = require './basic.js'
util = require './util.js'

this.countcalls = (base) ->
    count = 0
    ->
      count += 1
      console.log("Function called #{count} times")
      base.apply(this, arguments)
