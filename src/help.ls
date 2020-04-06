require! <[
  path
]>

console.log """
  Visualisation for GTSP tasks / solutions.

  Usage: #{process.argv
    .slice 0 2
    .map -> path.basename it
    .join ' '} source[.json] [GTSP.result.txt]

  NOTE: target HTML file will be silently overwritten!

  See: #{require \../package .homepage}
  """

process.exit!