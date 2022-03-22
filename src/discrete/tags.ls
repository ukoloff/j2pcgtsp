require! <[ ../svg/tag ]>

module.exports = tags

function tags data
  result = ""
  for g, i in data.groups
    for pt in g.points
      result += """

      <circle class="pierce" cx="#{pt.x}" cy="#{pt.y}"><title>Point ##{pt.id or '-'}
      Group ##{pt.group?.id or '-'} (#{pt.group?.points?.length or 0} points)
      X: #{pt.x}
      Y: #{pt.y}
      </title></circle>
      """
  result
