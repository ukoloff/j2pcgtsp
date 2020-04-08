#
# Open SVG tag
#
exports <<< {open, close}

function open bounds
  margin = 0.01
  size =
    x: bounds.max.x - bounds.min.x
    y: bounds.max.y - bounds.min.y

  """
  <svg height="100%" width="100%" viewBox="#{
    [bounds.min.x - size.x * margin,
    -bounds.max.y - size.y * margin,
     size.x * (1 + 2 * margin),
     size.y * (1 + 2 * margin)]
    .join ' '
  }"><g><g transform = "scale(1, -1)">
  """

function close
  """

  </g></g></svg>
  """
