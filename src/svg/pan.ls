
module.exports = """
<script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@#{
  require 'svg-pan-zoom/package' .version
  }/dist/svg-pan-zoom.min.js"></script>
<script>
  setTimeout(function() {
    svgPanZoom('svg', {controlIconsEnabled: true})
  })
</script>
"""
