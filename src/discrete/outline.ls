require! <[ ../svg/tag ]>

module.exports = outline

function outline data
  data.groups.map ->
    tag do
      cluster it.points
      class: \cluster
      title: """
        Cluster ##{it.id}
        Points: #{it.points.length}
      """
  .join ''

function cluster points
  "M #{points.map -> "#{it.x} #{it.y}"
  .join "\nL "} Z"
