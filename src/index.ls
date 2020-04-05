require! <[
  fs
  path
  ./json
  ./json/svg
  ./svg/css
  ./route
  ./route/tags
]>

data = json \data/8877
console.log "Found: #{data.points.length}/#{data.groups.length} points/groups"

seq = route filename = "data/8877-2.result (2).txt"
console.log "Found: #{seq.length} route point(s)"

out = path.parse filename
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
#{tags seq, data}
#{svg.close!}
</body>
</html>
"""
fs.writeFileSync out, html
