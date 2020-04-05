#
# Extract data from JSON
#
module.exports = extract

function extract raw
  points = []
  groups = []

  for c in raw.Contours
    contour c

  !function contour c, parent
    groups.push me =
      id: c.Index
      up: if parent
        parent.up.concat parent
      else
        []
      points: []
      groups: []

    if parent
      parent.groups.push me

    for p in c.Points or []
      points.push do
        id: p.GlobalIndex
        x: p.X
        y: p.Y
        group: me
    for c in c.Nested-contours or []
      contour c, me

  # return
  start:
    x: raw.TaskData.StartX or raw.TaskData.FinishX or 0
    y: raw.TaskData.StartY or raw.TaskData.FinishY or 0
  points: points
  groups: groups
