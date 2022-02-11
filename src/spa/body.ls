require! <[
  ../m
  ./uploads
  ./notabene
  ../model/formats
  ../model/state
  ../model/params
  ./save
  ./measure
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
    var upload-button
    m.fragment do
      m \h1 document.title = 'View DBS / JSON / GTSP'
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
        m \label, 'Starting point: ',
          m \select,
            oncreate: !->
              try
                it.dom.selected-index = params.start-point-mode = Number local-storage['starting-pont']
            onchange: !->
              try
                local-storage['starting-pont'] = params.start-point-mode = @selected-index
                measure!
            for z in 'Autodetect;First contour (new format);Last contour (old format)'.split \;
              m \option, z
        m \br
        m \label,
          m \input,
            type: \checkbox
            checked: params.hide-icons = !!local-storage[\hide-icons]
            onclick: !->
              try
                local-storage[\hide-icons] = params.hide-icons = if @checked then \+ else ''
          'Hide control icons'
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
