#
# Get route point
#
module.exports = points

function points route, data
  route.map ->
    data.iPoints[it] or data.start
