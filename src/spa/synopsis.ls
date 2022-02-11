require! <[
  ../m
  ../model/formats
]>

exports <<<
  view: ->
    m 'table.formats[border]',
      m \tr,
        m \th \Data
        m \th \.ext
        m \th m \nobr 'File name'
        m 'th[width=100%]' 'Additional info'
      m \tr,
        m \td \DBS
        m \td \.dbs.json
        m \td m \b m \nobr formats.dbs.name
        m \td formats.dbs.info
      m \tr,
        m \td \GTSP
        m \td \.json
        m \td m \b m \nobr formats.discrete.name
        m \td formats.discrete.info
      m \tr,
        m \td \Route
        m \td \.result.txt
        m \td m \b m \nobr formats.route.name
        m \td formats.route.info
