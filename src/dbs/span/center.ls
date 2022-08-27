require! <[
  ./vector
]>

module.exports = center

function center span
  v  = vector span
  mul v, (1 / span.b - span.b) / 2
  mid =  for i to 1
    span.a[i] + span.z[i]
  mid[0] -= v[1]
  mid[1] += v[0]
  mul mid, 0.5
  mid

!function mul(vec, factor)
  for i to 1
    vec[i] *= factor
