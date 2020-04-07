#
# Render SVG for DBS
#
require! <[  ../svg/tag ]>

module.exports = tags

function tags dbs
  dbs.map part2svg .join ''

function part2svg part
  tag do
    part.paths.map path2svg .join ''
    class: \DBS
    title: """
      Part: #{part.partid}
      Contours: #{part.paths.length}
      """

function path2svg path
  result = ''
  prev = []
  for p in path
    result += \\n
    unless prev.length
      # First point
      result += \M
    else unless prev[2]
      # Linear segment
      result += \L
    else
      # Arc
      radius = Math.abs(1 / prev[2] + prev[2]) / 4 * distance p, prev
      result += "A #{radius} #{radius} 0 #{Number 1 < Math.abs prev[2]} #{Number prev[2] > 0}"
    result += " #{p[0]} #{p[1]}"
    prev = p
  if path.length > 0 and path[0][0] == path[*-1][0] and path[0][1] == path[*-1][1]
    result += " Z"
  result

function sqr x
  x * x

function distance p1, p2
  Math.sqrt sqr(p1[0] - p2[0]) + sqr(p1[1] - p2[1])
