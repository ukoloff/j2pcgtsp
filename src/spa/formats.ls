require! <[
  ../dbs
  ../discrete
  ../route
]>

exports <<< {dbs, discrete, route}

for k, v of exports
  exports[k] = parser: v
