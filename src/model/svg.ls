require! <[
  ../svg
  ./formats
]>

module.exports = SVG

function SVG
  bounds = formats.discrete.data.bounds

  code = svg.open bounds

  code += if formats.dbs.data
    require \../dbs/tags <| formats.dbs.data
  else
    require \../discrete/outline <| formats.discrete.data
  code += require \../discrete/tags <| formats.discrete.data
  if formats.route.data
    code += (require \../route/tags) formats.route.data, formats.discrete.data
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
