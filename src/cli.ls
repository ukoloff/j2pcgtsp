require! <[
  fs
  path
  ./dbs
  ./discrete
  ./svg
  ./svg/css
  ./svg/pan
  ./route
  ./route/len
]>

formats =
  dbs:
    parser: dbs
  discrete:
    parser: discrete
  route:
    parser: route

unless  2 < process.argv.length < 6
  require \./help

for file-name in process.argv.slice 2
  console.log \Reading: file-name = path.resolve file-name
  txt = fs.readFileSync file-name, \utf8

  ok = false
  for , format of formats
    try
      data = format.parser txt
      console.log \Found: format.parser.success data
      format.data = data
      format.file-name = file-name
      ok = true
      break
  unless ok
    console.log "Unknown file format!"
    process.exit!

unless formats.discrete.data
  console.log "GTSP problem[.json] not found!"
  process.exit!

bounds = formats.discrete.data.bounds

for , format of formats
  out? = format.file-name

out = path.parse out
out.ext = \.html
delete out.base
out = path.format out
console.log \Writing: out

html = """
<!DOCTYPE html>
<html>
<head>
<style>
#{css}
</style>
#{pan}
</head>
<body>
#{svg.open bounds}
#{if formats.dbs.data
    require \./dbs/tags <| formats.dbs.data
  else "" }
#{require \./discrete/tags <| formats.discrete.data}
#{if formats.route.data
    (require \./route/tags) formats.route.data, formats.discrete.data
  else "" }
#{svg.close!}
</body>
</html>
"""
fs.writeFileSync out, html

if formats.route.data
  console.log """
    ---
    Route length: #{len formats.route.data, formats.discrete.data}
    """