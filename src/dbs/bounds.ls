#
# Quick-n-dirty bounds calculator
#
module.exports = bounds
# bounds.union = union

function bounds dbs
  result =
    min: {}
    max: {}
  for part in dbs
    for path in part.paths
      for pt in path
        result.min.x = Math.min pt[0], result.min.x ? pt[0]
        result.min.y = Math.min pt[1], result.min.y ? pt[1]
        result.max.x = Math.max pt[0], result.max.x ? pt[0]
        result.max.y = Math.max pt[1], result.max.y ? pt[1]
  result

/*
function union r1, r2
  return
    min:
      x: Math.min r1.min.x, r2.min.x
      y: Math.min r1.min.y, r2.min.y
    max:
      x: Math.max r1.max.x, r2.max.x
      y: Math.max r1.max.y, r2.max.y
*/
