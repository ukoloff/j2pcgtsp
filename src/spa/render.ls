require! <[
  svg-pan-zoom
  ../m
  ../model/formats
  ../model/params
  ../model/svg
]>

module.exports = params.onrender =
  render

# params.onrender = # Install itself to popup
#   render

!function render
  m.mount document.body, SVG

  history.push-state {}, 'View SVG'
  window.onpopstate = come-back

SVG =
  oncreate: !->
    svg-pan-zoom it.dom,
      control-icons-enabled: !params.hide-icons
  view: ->
    m.trust svg!

!function come-back
  require! <[ ./body ]>
  window.onpopstate = void
  m.mount document.body, body
