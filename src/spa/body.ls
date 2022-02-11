require! <[
  ../m
  ./uploads
  ./notabene
  ./parameters
  ./inputs
  ../model/formats
  ../model/state
  ../model/params
  ./save
]>

exports <<<
  oncreate: !->
    it.dom.parent-node
      ..ondragenter = -> false
      ..ondragleave = -> false
      ..ondragover = -> false
      ..ondrop = ->
        uploads it.data-transfer.files
        false
  onremove: !->
    it.dom.parent-node
      ..ondragenter = null
      ..ondragleave = null
      ..ondragover = null
      ..ondrop = null
  view: ->
    me = @
    m.fragment do
      m \h1 document.title = 'View DBS / JSON / GTSP'
      m \form,
        m inputs
        m parameters
        m \input.hidden,
          type: \file
          multiple: true
          oncreate: !->
            me.upload-button = it.dom
              ..onchange = !->
                uploads @files
        m \button,
          type: \button
          onclick: !->
            me.upload-button.click!
          'Upload file(s)'
        ' ...or drag-and-drop file(s) onto this page...'
        if state.bad-files.length
          m \p, "Unknown files: #{state.bad-files.join ', '}"
        m \hr
        if state.route-length
          m \p "Route length: #{that}"
        m \button,
          type: \button
          disabled: !formats.discrete.data
          onclick: params.onrender
          'View!'
        ' in View mode hit Back or Refresh (F5) to come back to this page'
        m \p
        m \button,
          type: \button
          disabled: !formats.discrete.data
          onclick: save
          'Export HTML + SVG'

        m notabene
