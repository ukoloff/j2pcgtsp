#
# Open SVG tag
#
exports <<< {open, close}

function open bounds
  """
  <svg height="100%" width="100%" viewBox="#{
    [bounds.min.x, -bounds.max.y, bounds.max.x - bounds.min.x, bounds.max.y - bounds.min.y]
    .join ' '
  }"><g transform = "scale(1, -1)">
  """

function close
  """

  </g></svg>
  """
