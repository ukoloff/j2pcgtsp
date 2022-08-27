require! <[
  ./vector
]>

module.exports = radius

function radius span
  Math.abs(1 / span.b + span.b) / 4 * Math.sqrt sum vector span

function sum vec
  result = 0
  for x in vec
    result += x
  result
