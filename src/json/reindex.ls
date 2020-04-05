module.exports = reindex

function reindex data
  data.iPoints = z = {}
  for p in data.points
    z[p.id] = p

  data.iGroups = z = {}
  for g in data.groups
    z[g.id] = g
