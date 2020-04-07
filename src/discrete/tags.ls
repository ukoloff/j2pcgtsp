require! <[ ../svg/tag ]>

module.exports = tags

function tags data
  result = ""
  for g, i in data.groups
    result += "\n" + tag g.points, do
      class: \part
      title: """
        Group ##{g.id}
        Points: #{g.points.length}
        """
  result
