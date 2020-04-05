require! <[
  fs
  path
  ./validate
  ./unapply
  ./reindex
  ./bounds
]>

module.exports = read-json

function read-json filename
  filename = path.resolve filename
  unless path.extname filename
    filename += \.json

  console.log \Reading: filename
  raw = JSON.parse fs.readFileSync filename
  validate raw

  data = unapply raw
  reindex data
  bounds data

  data