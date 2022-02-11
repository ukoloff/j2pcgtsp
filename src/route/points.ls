#
# Get route point
#
require! \../model/formats

module.exports = points

function points route, data
  shift = detect-shift route
  route.map ->
    data.iPoints[it - shift] or data.start

#
# Quick-n-dirty autodetect for rotue format
# Is fake contour (start point) first or last in job?
function detect-shift route
  return switch formats.route.start-point-mode
  case 1  # First contour (new format)
    1
  case 2  # Last contour (old format)
    0
  default # Autodetect
    if route?[0] == 1
      1
    else
      0
