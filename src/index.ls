require! <[
  fs
  path
  ./json
  ./json/svg
  ./svg/css
  ./route
  ./route/tags
]>

unless  2 < process.argv.length < 5
  require \./help

fileSrc = path.resolve process.argv[2]
unless path.extname fileSrc
  fileSrc += \.json

console.log \Reading: fileSrc
data = json JSON.parse fs.readFileSync fileSrc
console.log "Found: #{data.points.length}/#{data.groups.length} points/groups"

if process.argv.length > 3
  fileDst = path.resolve process.argv[3]
  console.log \Reading: fileDst
  seq = route fs.readFileSync fileDst, \utf8
  console.log "Found: #{seq.length} route point(s)"

out = path.parse fileDst || fileSrc
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
</head>
<body>
#{svg.open data}
#{svg.tags data}
#{if seq then tags seq, data else ""}
#{svg.close!}
</body>
</html>
"""
fs.writeFileSync out, html
