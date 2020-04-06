module.exports = path

function path points
  result = ''
  for p, i in points
    result += """

      \t#{if i then "L" else "M"} #{p.x} #{p.y}
      """
  result + " Z"
