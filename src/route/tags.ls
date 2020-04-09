#
# SVG tags for route
#
require! <[
  ./points
  ../svg/tag
]>

module.exports = tags

function tags route, data
  pts = points ...
  result = tag pts, class: \route
  for p in pts
    result += """

    <circle class="route" cx="#{p.x}" cy="#{p.y}"><title>Point ##{p.id or '-'}
    Group ##{p.group?.id or '-'} (#{p.group?.points?.length or 0} points)
    X: #{p.x}
    Y: #{p.y}
    </title></circle>
    """
  result
