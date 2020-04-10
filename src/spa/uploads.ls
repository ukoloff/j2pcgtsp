require! <[
  ../m
  ./formats
  ./state
  ../route/len
]>

module.exports = uploads

!function uploads files
  state.bad-files.length = 0

  for file in files
    handle-file file

!function handle-file file
  txt <-! file.text!then
  ok = false
  for k, format of formats
    try
      data = format.parser txt
      info = format.parser.success data
      format <<< {data, info, file.name}
      ok = true
      break
  if !ok
    state.bad-files.push file.name

  if formats.discrete.data and formats.route.data
    state.route-length = len formats.route.data, formats.discrete.data

  m.redraw!
