require! <[ assert ]>

module.exports = validate

!function validate raw
  assert raw.TaskData
  assert raw.Contours
