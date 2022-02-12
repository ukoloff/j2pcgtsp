require! <[
  ../m
  ./formats
]>

module.exports = parse-file

function parse-file text
  for k, format of formats
    try
      data = format.parser text
      info = format.parser.success data
      format <<< {data, info, file.name}
      return k
  false
