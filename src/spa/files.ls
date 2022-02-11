require! <[
  ../m
  ./uploads
]>

exports <<<
  oncreate: !->
    document.body
      ..ondragenter = oops
      ..ondragleave = oops
      ..ondragover =  oops
      ..ondrop = ->
        uploads it.data-transfer.files
        false
  onremove: !->
    document.body
      ..ondragenter = null
      ..ondragleave = null
      ..ondragover = null
      ..ondrop = null
  view: ->
    me = @
    m.fragment do
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

function oops
  false
