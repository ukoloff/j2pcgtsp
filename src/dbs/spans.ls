#
# Iterate over spans of path
#
module.exports = spans

!function path-spans path, fn
  for pt in path
    if prev
      fn do
       a: prev
       b: prev[2]
       z: pt
    prev = pt

!function part-spans part, fn
  for path in part.paths
    path-spans path, fn

!function spans dbs, fn
  for part in dbs
    part-spans part, fn
