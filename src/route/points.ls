#
# Get route point
#
module.exports = points

function points route, data
  route.map ->
    data.iPoints[it - 1] or data.start
