require! <[
  ../model/params
  ./spz
]>

module.exports = js

function js
  """
  <script src="#{spz.path}"></script>
  <script>
    setTimeout(function() {
      svgPanZoom('svg', {controlIconsEnabled: #{!params.hide-icons}})
    })
  </script>
  """
