#
# Process command line
#
require!<[process]>

module.exports = getopt

function getopt switches="?=h", argv=process.argv.slice 2
  map = swx switches
  result = argv: argv
  mode = 0
  for arg in argv
    switch mode
    case 0
      if '--' == arg
        mode = 2
        continue
    case 1
      result[option] = arg
      mode = 0
    case 2
      result.argv.push arg
  result

function swx switches
  result = {}
  aliases = []

  for c in switches
    unless tail
      aliases.push c
      tail = 1
      continue
    if c == '='
      tail = 0
      continue
    store params = c == ':'
    unless params
      aliases.push c
      tail = 1
  do !function store params
    unless aliases.length
      return
    last = aliases.pop!
    for option in aliases
      result[option] = last
    result[last] = !!params
    aliases := []
  result
