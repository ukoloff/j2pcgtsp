require! <[
  ./bounds
]>

module.exports = box

function box data
  data.bounds = bounds data
