require! <[
  ../svg
  ./formats
]>

module.exports = graphics

function graphics
  bounds = formats.discrete.data.bounds

  """
  #{svg.open bounds}
  #{if formats.dbs.data
      require \../dbs/tags <| formats.dbs.data
    else "" }
  #{require \../discrete/tags <| formats.discrete.data}
  #{if formats.route.data
      (require \../route/tags) formats.route.data, formats.discrete.data
    else "" }
  #{svg.close!}
  """
