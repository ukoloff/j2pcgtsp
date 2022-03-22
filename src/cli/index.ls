require!<[
  fs
  process
  ./getopt
  ./options
  ../model/parse
  ../model/formats
  ../model/state
  ../model/measure
  ../model/html
]>

parser = getopt options
argv = parser!
if argv.h or !argv.length
  parser.help!
  process.exit 1

console.log "Reading files..."
for f, i in argv
  console.log "#{i+1}.\t#{f}"
  txt = fs.read-file-sync f, encoding: \utf-8
  if mode = parse txt, f
    console.log "\t#{mode}:\t#{formats[mode].info}"
  else
    console.log "\t^ Unknown format"

if !formats.discrete.data
  console.error "Insufficient data"
  process.exit 1

measure!

if state.route-length
  console.log "Route length:", that

out = formats.discrete.name + ".html"
console.log "Writing to:\n\t#{out}"
fs.write-file-sync out, html!, encoding: \utf-8
console.log "That's all folks!"
