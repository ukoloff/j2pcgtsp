require! <[
  ../m
  ./formats
]>

module.exports = uploads

!function uploads files
  for file in files
    handle-file file

!function handle-file file
  txt <-! file.text!then
  ok = false
  for let k, format of formats when !ok
    try
      data = format.parser txt
      info = format.parser.success data
      format <<< {data, info, file.name}
      ok := true
  m.redraw!
