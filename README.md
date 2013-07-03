# Decaf


Some utility decorators (function functions) for Coffeescript

Here is an example session

```coffeescript
 coffee> prf = require('./profiling.js') #Decorators useful for profiling
 { countcalls: [Function],
 logexceptionargs: [Function] }

 coffee> timing = require('./timing.js') #Decorators useful for benchmarking
 { timer: [Function],
 logStart: [Function],
 logEnd: [Function] }

 coffee> mem = require('./memoized.js') #Decorators that accelerate execution by relying on cache tricks
 { memoized: [Function],
 ttlCache: [Function] }
 coffee> fib = (n) -> if n is 0 or n is 1 then n else fib(n-1) + fib(n-2) #Simple fibonacci function, naive implementation, gets the point acro
 [Function]

 #Let us create a timed version of a function in order to benchmark it

 coffee> timedfib = timing.timer("Fib") fib
 [Function]
 coffee> timedfib 10
 Execution of Fib - 1ms
 55
 coffee> timedfib 30
 Execution of Fib - 23ms
 832040
 coffee> timedfib 40
 Execution of Fib - 2569ms
 102334155

 #Memoizing function arguments in order to accelerate execution is a nice space/time tradeoff

 coffee> fastfib = timing.timer("Fib") mem.memoized fib
 [Function]
 coffee> fastfib 10
 Execution of Fib - 0ms
 55
 coffee> fastfib 30
 Execution of Fib - 26ms
 832040
 coffee> fastfib 30
 Execution of Fib - 0ms
 832040
 coffee> fastfib 30
 Execution of Fib - 6ms
 832040
 coffee> fastfib 40
 Execution of Fib - 2560ms
 102334155
 coffee> fastfib 40
 Execution of Fib - 2ms
 102334155

 #Track how many times your function is being called

 coffee> fib = prf.countcalls fib
 [Function]
 coffee> fib 5
 Function called 1 times
 Function called 2 times
 Function called 3 times
 Function called 4 times
 Function called 5 times
 Function called 6 times
 Function called 7 times
 Function called 8 times
 Function called 9 times
 Function called 10 times
 Function called 11 times
 Function called 12 times
 Function called 13 times
 Function called 14 times
 Function called 15 times
 5
```