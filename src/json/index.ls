require! <[
  ./validate
  ./unapply
  ./reindex
  ./bounds
]>

module.exports = read-json

function read-json raw
  validate raw

  data = unapply raw
  reindex data
  bounds data

  data
