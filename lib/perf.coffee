basic = require './basic.js'
util = require './util.js'

this.throttled = (rate) ->
    (base) ->
        lastexec = new Date().getTime()
        ->
            t = new Date().getTime()
            if t - lastexec > rate
                lastexec = t
                base.apply(this, arguments)
            else
                console.log("Rate exceeded")
