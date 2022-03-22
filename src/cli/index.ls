require!<[
  fs
  ./getopt
  ./options
  ../model/parse
  ../model/formats
  ../model/state
  ../model/measure
  ../model/html
]>

console.log "Reading files..."
opts = getopt '?=hfxo:s:'
for f, i in opts.argv
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
