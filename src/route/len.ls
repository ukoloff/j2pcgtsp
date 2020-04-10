#
# Calculate length of route
#
require! <[ ./points ]>

module.exports = len

function len route, data
  pts = points ...
  result = 0
  if pts.length
    prev = pts[* - 1]
  for pt in pts
    result += distance prev, pt
    prev = pt
  result

function sqr x
  x * x

function distance p1, p2
  Math.sqrt sqr(p1.x - p2.x) + sqr(p1.y - p2.y)
