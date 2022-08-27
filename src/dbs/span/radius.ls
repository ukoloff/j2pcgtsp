require! <[
  ./vector
]>

module.exports = radius

function radius span
  Math.abs(1 / span.b + span.b) / 4 *  len vector span

function len vec
  result = 0
  for x in vec
    result += x * x
  Math.sqrt result
