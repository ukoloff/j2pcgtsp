require!<[fs process]>
require!<[
  ../model/parse
  ../model/formats
]>
# dbs = fs.read-file-sync(process.argv[2] + '.dbs.json')

console.log "Reading files..."
for f, i in process.argv.slice 2
  console.log "#{i+1}.\t#{f}"
  txt = fs.read-file-sync f, encoding: \utf-8
  if mode = parse txt, f
    console.log "\t#{mode}:\t#{formats[mode].info}"
  else
    console.log "\t^ Unknown format"
