#
# Read route
#

module.exports = read

function read text
  if /\bTour Ordering\s*:\s*\[([\s\d,]*)\]/.exec text
    that[1]
      .split /\D+/
      .filter -> it # .compact!
      .map Number
  else
    []
