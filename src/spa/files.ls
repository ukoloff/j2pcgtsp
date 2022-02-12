require! <[
  ../m
  ../model/parse
  ../model/measure
  ../model/state
]>

exports <<<
  oncreate: !->
    document.body
      ..ondragenter = oops
      ..ondragleave = oops
      ..ondragover =  oops
      ..ondrop = ->
        parse-files it.data-transfer.files
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
              parse-files @files
      m \button,
        type: \button
        onclick: !->
          me.upload-button.click!
        'Upload file(s)'
      ' ...or drag-and-drop file(s) onto this page...'

function oops
  false

!function parse-files files
  state.bad-files.length = 0

  seq = Promise.resolve!
  for let file in files
    seq .= then ->
      <-! file.text!then
      if !parse it
        state.bad-files.push file.name

  <-! seq.then
  measure!
  m.redraw!
