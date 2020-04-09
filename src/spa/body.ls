require! <[
  ../m
  ./uploads
  ./formats
  ./state
]>

var upload-button

exports <<<
  oncreate: !->
    container = it.dom.parent-node
      ..ondragenter = -> false
      ..ondragleave = -> false
      ..ondragover = -> false
      ..ondrop = ->
        uploads it.data-transfer.files
        false
  view: ->
    m.fragment do
      m \h1 document.title = 'View DBS / JSON /GTSP'
      m \form,
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
        m \p
        m \input.hidden,
          type: \file
          multiple: true
          oncreate: !->
            upload-button := it.dom
              ..onchange = !->
                uploads @files
        m \button,
          type: \button
          onclick: !->
            upload-button.click!
          'Upload file(s)'
        ' ...or drag-and-drop file(s) onto this page...'
        m \hr
        if state.route-length
          m \p "Route length: #{that}"
        m \button,
          type: \button
          disabled: !formats.discrete.data
          'View!'
        ' in View mode hit Refresh (F5) to come back to this page'

