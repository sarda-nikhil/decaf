basic = require './basic.js'
util = require './util.js'

this.timer = (name) ->
    basic.around (fn) ->
        t = new Date().getTime()
        fn()
        ms = new Date().getTime() - t
        console.log("Execution of #{name} - #{ms.toString()}ms")

this.logStart = (name) ->
    basic.before (fn) ->
        t = new Date().getTime()
        console.log("Execution of #{name} started at #{t.toString()}")

this.logEnd = (name) ->
    basic.after (fn) ->
        t = new Date().getTime()
        console.log("Execution of #{name} ended at #{t.toString()}")
