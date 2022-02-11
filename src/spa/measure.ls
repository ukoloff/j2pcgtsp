#
# Update Route's length
#
require! <[
  ../model/formats
  ../model/state
  ../route/len
]>

module.exports = update

!function update
  if formats.discrete.data and formats.route.data
    state.route-length = len formats.route.data, formats.discrete.data
