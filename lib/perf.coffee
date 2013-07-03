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

this.retry_delay = (tries, delay=2, backoff=3) ->
    (base) ->
        # TODO Do some value checks
        ->
            mtries = tries
            mdelay = delay
            try
                if mtries > 0
                    base.apply(this, argument)
                mtries -=1
            catch error
                while mtries > 0
                    setTimeout(__value__=base.apply(this, argument), mdelay)
                    if __value__? then break
                    mdelay *= backoff
                    mtries -= 1

this.deprecated = basic.before -> console.log("Warning! Function has been deprecated")
