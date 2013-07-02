this.before =
    (decoration) ->
        (base) ->
          ->
            decoration.apply(this, arguments)
            base.apply(this, arguments)

this.after =
    (decoration) ->
        (base) ->
          ->
            decoration.call(this, __value__=base.apply(this, arguments))
            __value__

this.around =
    (decoration) ->
        (base) ->
          (argv...) ->
            __value__ = undefined
            callback = =>
                __value__ = base.apply(this, argv)
            decoration.apply(this, [callback].concat(argv))
            __value__

this.provided =
        (predicate) ->
          (base) ->
            ->
              if predicate.apply(this, arguments)
                base.apply(this, arguments)

this.excepting =
        (condition) ->
           (base) ->
             ->
                unless condition.apply(this, arguments)
                  base.apply(this, arguments)

