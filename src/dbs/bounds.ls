#
# Quick-n-dirty bounds calculator
#
require! <[
  ./spans
  ./span/box
]>

module.exports = bounds

function bounds dbs
  var result
  spans dbs, !->
    bnd = box it
    result := if result
      union result, bnd
    else
      bnd
  result

function union r1, r2
  return
    min:
      x: Math.min r1.min.x, r2.min.x
      y: Math.min r1.min.y, r2.min.y
    max:
      x: Math.max r1.max.x, r2.max.x
      y: Math.max r1.max.y, r2.max.y
