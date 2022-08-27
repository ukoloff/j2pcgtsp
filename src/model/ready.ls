#
# If data is ready to display
#
require! <[
  ./formats
]>

module.exports = ready

function ready
  formats.discrete.data or formats.dbs.data
