require! <[
  ./formats
]>

module.exports = name

function name
  formats.discrete.name or formats.dbs.name or \none
