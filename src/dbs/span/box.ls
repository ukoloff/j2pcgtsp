require! <[
  ./vector
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
  unless span.b
    return B
  # Arc
  v = vector span
  turn = [1, span.b]
  turn = mul turn, turn
  flags = mul v, turn
  turn[0] = -turn[0]
  flags.push ...mul v, turn
  flags.push ...v
  flags.push -v[0], -v[1]
  for flag, i in flags
    flags[i] = unless flag
      0
    else if flag > 0
      +1
    else
      -1
  bits = 0
  for i to 3
    if flags[i] and flags[i] != flags[i+4]
      bits .|.= 1 .<<. i % 2 + flags[i] + 1
  unless bits
    return B
  C = center span
  R = radius span
  for i to 3
    unless bits .&. 1 .<<. i
      continue
    switch i
    | 0 => B.min.x = C[0] - R
    | 1 => B.min.y = C[1] - R
    | 2 => B.max.x = C[0] + R
    | 3 => B.max.y = C[1] + R
  return B

# Complex multiplication
function mul a, b
  return
    a[0] * b[0] - a[1] * b[1]
    a[0] * b[1] + a[1] * b[0]
