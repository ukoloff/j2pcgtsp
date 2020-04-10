require! <[
  ../m
  ../svg
  ./formats
]>

module.exports = render

!function render
  m.mount document.body, SVG

SVG =
  view: ->
    bounds = formats.discrete.data.bounds

    m.trust """
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
