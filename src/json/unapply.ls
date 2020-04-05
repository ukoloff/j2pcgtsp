#
# Extract data from JSON
#
module.exports = extract

function extract raw
  points = []
  groups = []

  for c in raw.Contours
    contour c

  !function contour c
    for p in c.Points or []
      0
    for c in c.Nested-contours or []
      contour c

  # return
  start:
    x: raw.TaskData.StartX or raw.TaskData.FinishX or 0
    y: raw.TaskData.StartY or raw.TaskData.FinishY or 0
  points: points
  groups: groups
