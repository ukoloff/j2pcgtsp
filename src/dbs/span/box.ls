require! <[
  ./radius
  ./center
]>

module.exports = bounds

function bounds span
  B =
    min:
      x: Math.min span.a[0], span.z[0]
      y: Math.min span.a[1], span.z[1]
    max:
      x: Math.max span.a[0], span.z[0]
      y: Math.max span.a[1], span.z[1]
  if span.b == 0
    return B
  #
  # C = center span
  R = radius span
  return B
