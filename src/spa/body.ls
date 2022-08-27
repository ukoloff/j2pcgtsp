require! <[
  ../m
  ./notabene
  ./parameters
  ./synopsis
  ./files
  ../model/ready
  ../model/state
  ../model/params
  ./save
]>

exports <<<
  view: ->
    m.fragment do
      m \h1 document.title = 'View DBS / JSON / GTSP'
      m \form,
        m synopsis
        m parameters
        m files
        if state.bad-files.length
          m \p, "Unknown files: #{state.bad-files.join ', '}"
        m \hr
        if state.route-length
          m \p "Route length: #{that}"
        m \button,
          type: \button
          disabled: !ready!
          onclick: params.onrender
          'View!'
        ' in View mode hit Back or Refresh (F5) to come back to this page'
        m \p
        m \button,
          type: \button
          disabled: !ready!
          onclick: save
          'Export HTML + SVG'

        m notabene
