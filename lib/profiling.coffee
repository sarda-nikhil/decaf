basic = require './basic.js'
util = require './util.js'

this.countcalls = (base) ->
    count = 0
    ->
      count += 1
      console.log("Function called #{count} times")
      base.apply(this, arguments)

this.logexceptionargs = (base) ->
    exceptionArgs = {}
    ->
        try
            base.apply(this, arguments)
        catch error
            key = util.getHash(JSON.stringify(arguments))
            if not exceptionArgs.hasOwnProperty(key)
                exceptionArgs[key] = arguments
            console.log("Exception was thrown")
            throw error
