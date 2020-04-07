require! <[
  ./validate
  ./unapply
  ./reindex
  ./bounds
]>

module.exports = read-json

function read-json raw
  validate raw

  unapply raw
    reindex ..
    bounds ..
