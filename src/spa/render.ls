require! <[
  svg-pan-zoom
  ../m
  ../model/formats
  ./graphics
]>

module.exports = render

!function render
  m.mount document.body, SVG

  history.push-state {}, 'View SVG'
  window.onpopstate = come-back

SVG =
  oncreate: !->
    svg-pan-zoom it.dom,
      control-icons-enabled: true
  view: ->
    m.trust graphics!

!function come-back
  require! <[ ./body ]>
  window.onpopstate = void
  m.mount document.body, body
