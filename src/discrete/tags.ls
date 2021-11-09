require! <[ ../svg/tag ]>

module.exports = tags

function tags data
  result = ""
  for g, i in data.groups
    for pt in g.points
      result += """

      <circle class="pierce" cx="#{pt.x}" cy="#{pt.y}"></circle>
      """
  result
