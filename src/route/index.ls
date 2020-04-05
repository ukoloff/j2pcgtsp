#
# Read route
#
require! <[
  fs
  path
]>

module.exports = read

function read filename
  filename = path.resolve filename
  console.log \Reading: filename
  src = fs.readFileSync filename, \utf8
  if /\bTour Ordering\s*:\s*\[([\s\d,]*)\]/.exec src
    that[1]
      .split /\D+/
      .filter -> it # .compact!
      .map Number
  else
    []
