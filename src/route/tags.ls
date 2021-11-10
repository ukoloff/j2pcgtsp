#
# SVG tags for route
#
require! <[
  ./points
  ../svg/tag
]>

module.exports = tags

function tags route, data
  pts = points ...
  result = tag pts, class: \route
  result
