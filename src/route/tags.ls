#
# SVG tags for route
#
require! <[
  ../svg/tag
]>

module.exports = tags

function tags route, data
  points = route.map ->
    data.iPoints[it] or data.start
  result = tag points, class: \route
  for p in points
    result += """

    <circle class="route" cx="#{p.x}" cy="#{p.y}"><title>Point ##{p.id or '-'}
    Group ##{p.group?.id or '-'}
    X: #{p.x}
    Y: #{p.y}
    </title></circle>
    """
