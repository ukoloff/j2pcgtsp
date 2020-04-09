require! <[
  ../m
]>

exports <<<
  view: ->
    var upload-button
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
            m \td
            m \td
          m \tr,
            m \td \GTSP
            m \td \.json
            m \td
            m \td
          m \tr,
            m \td \Route
            m \td \.result.txt
            m \td
            m \td
        m \p
        m \input.hidden,
          type: \file
          multiple: true
          oncreate: !->
            upload-button := it.dom
              ..onchange = !->
                alert <| Array.from @files .map (.name)
        m \button,
          type: \button
          onclick: !->
            upload-button.click!
          'Upload file(s)'
        ' ...or drag-and-drop file(s) onto this page...'
