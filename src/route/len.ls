#
# Calculate length of route
#
module.exports = len

function len route, data
  points = route.map ->
    data.iPoints[it] or data.start
  result = 0
  if points.length
    prev = points[* - 1]
  for pt in points
    result += distance prev, pt
    prev = pt
  result

function sqr x
  x * x

function distance p1, p2
  Math.sqrt sqr(p1.x - p2.x) + sqr(p1.y - p2.y)
