require! <[
  svg-pan-zoom
  ../m
  ../svg
  ./formats
]>

module.exports = render

!function render
  m.mount document.body, SVG

  history.push-state {}, 'View SVG'
  window.onpopstate = come-back

SVG =
  oncreate: !->
    svg-pan-zoom it.dom,
      controlIconsEnabled: true
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

!function come-back
  require! <[ ./body ]>
  window.onpopstate = void
  m.mount document.body, body

bodi =
  view: ->
    m \div \Hi
