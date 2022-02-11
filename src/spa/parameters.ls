require! <[
  ../m
  ../model/params
  ./measure
]>

exports <<<
  view: ->
    m.fragment do
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
