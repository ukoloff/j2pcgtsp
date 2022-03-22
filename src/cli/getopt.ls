#
# Process command line
#
require!<[process]>

module.exports = getopt

function getopt definitions
  shorts = {}
  longs = {}

  # Build indexes
  for k, v of definitions
    option =
      help: v
    if /^=/.test v
      option =
        help: v.replace /.\s*/, ''
        val: true
    shorts[k.char-at 0] = longs[k] = option

  function key k
    if longs[k].val
      k + '[=?]'
    else
      k

  !function help
    console.log \Options:
    len = 0
    for k of longs
      len = Math.max len, (key k).length
    for k, v of longs
      k = key k
      while k.length < len
        k += ' '
      console.log "  -#{k.char-at 0}  --#{k} #{v.help}"
    console.log "\nSee", (require \../../package).homepage

  parser.help = help

  # Return parser
  function parser args = process.argv.slice 2
    result = []

    function next-arg
      result[c] = args.shift! ? true

    function flag-arg
      result[c] ||= 0
      result[c]++

    while args.length
      if '--' == arg = args.shift()
        result.push ...args
        break
      if /^--\w/.test arg
        arg = arg.substring 2
        if valued = /=/.test arg
          arg = RegExp.left-context
          val = RegExp.right-context
        unless opt = longs[arg]
          throw Error "Unknown option: --#{arg}"
        c = arg.char-at 0
        if valued
          result[c] = val
        else if opt.val
          next-arg!
        else
          flag-arg!
      else if /^-\w/.test arg
        arg = arg.substring 1
        while arg.length
          unless opt = shorts[c = arg.char-at(0).toLowerCase!]
            throw Error "Unknown option: -#{c}"
          arg = arg.substring 1
          if opt.val
            if arg
              result[c] = arg
            else
              next-arg!
            break
          flag-arg!
      else
        result.push arg
    result
