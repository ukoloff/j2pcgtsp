require! <[
  ../svg
  ./formats
]>

module.exports = SVG

function SVG
  bounds = formats.discrete.data.bounds

  code = svg.open bounds
  if formats.dbs.data
    code += require \../dbs/tags <| formats.dbs.data
  code += require \../discrete/tags <| formats.discrete.data
  if formats.route.data
    code += (require \../route/tags) formats.route.data, formats.discrete.data
  code += svg.close!
  code
