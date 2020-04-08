#
# Read route
#

module.exports = read
read.success = success

function read text
  if /\bTour Ordering\s*:\s*\[([\s\d,]*)\]/.exec text
    that[1]
      .split /\D+/
      .filter -> it # .compact!
      .map Number
  else
    throw Error "GTSP route not found"

function success data
  "#{data.length} route point(s)"
