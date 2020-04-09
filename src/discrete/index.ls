require! <[
  assert
  ./unapply
  ./reindex
  ./bounds
]>

module.exports = read-json
read-json.success = success

function read-json txt
  raw = JSON.parse txt
  validate raw

  unapply raw
    reindex ..
    bounds ..

!function validate raw
  assert raw.TaskData
  assert raw.Contours

function success data
  "#{data.points.length}/#{data.groups.length} points/groups"
