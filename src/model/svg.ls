require! <[
  ../svg
  ./formats
  ../dbs/box
]>

module.exports = SVG

function SVG
  bounds = if formats.discrete.data
    that.bounds
  else
    box formats.dbs.data

  code = svg.open bounds

  if formats.dbs.data
    code += require \../dbs/tags <| that

  if formats.discrete.data
    code += (if formats.dbs.data
      require \../discrete/tags
    else
      require \../discrete/outline
    ) <| that
    if formats.route.data
      code += (require \../route/tags) that, formats.discrete.data

  code += svg.close!
  code

# Build fake DBS for contours
function gtsp2dbs data
  [
    partid: "Start point"
    paths:  [close-path [[data.start.x, data.start.y, 0]]]
  ].concat data.groups.map ->
    partid: "Cluster##{it.id}"
    paths:
      close-path it.points.map -> [it.x, it.y, 0]
      ...

function close-path path
  path.push path[0]
  path
