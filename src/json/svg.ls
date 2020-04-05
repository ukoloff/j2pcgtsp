require! <[ ../svg ../svg/tag ]>

module.exports <<< {open, svg.close, tags}

function open data
  svg.open data.bounds

function tags data
  result = ""
  for g, i in data.groups
    result += "\n" + tag g.points, do
      class: \part
      title: g.id
  result
