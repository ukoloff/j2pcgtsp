require! <[
  ./formats
  ./state
]>

module.exports = parse-file

function parse-file text, name
  for k, format of formats
    try
      data = format.parser text
      info = format.parser.success data
      format <<< {data, info, name}
      return k
  state.bad-files.push name
  false
