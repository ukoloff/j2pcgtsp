module.exports = """
<script src="http://bumbu.github.io/svg-pan-zoom/dist/svg-pan-zoom.min.js"></script>
<script>
  setTimeout(initPan)
  function initPan() {
    var svg = document.getElementsByTagName('svg')[0]
    svgPanZoom(svg, {controlIconsEnabled: true})
  }
</script>
"""
