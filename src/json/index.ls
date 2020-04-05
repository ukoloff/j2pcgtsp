require! <[
  fs
  path
  ./validate
  ./unapply
  ./reindex
  ./bounds
  ./svg
]>

module.exports = read-json

!function read-json filename
  filename = path.resolve filename
  unless path.extname filename
    filename += \.json

  console.log \Reading: filename
  raw = JSON.parse fs.readFileSync filename
  validate raw

  data = unapply raw
  reindex data
  bounds data

  console.log "Found: #{data.points.length}/#{data.groups.length} points/groups"
  # console.log \Bounds: JSON.stringify data.bounds

  out = path.parse filename
  out.ext = \.html
  delete out.base
  out = path.format out
  console.log \Writing: out
  html = svg.open(data) + svg.tags(data) + svg.close!
  fs.writeFileSync out, html
