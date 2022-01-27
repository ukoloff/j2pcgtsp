require! <[
  path
]>

module.exports = html

function html options = {}
  name: \html
  generate-bundle: make-html

!function make-html output, bundle
  for , file of bundle when file.is-entry
    @emit-file do
      type: \asset
      source: build-html file.file-name
      file-name: \index.html
    @emit-file do
      type: \asset
      source: build-html void file.code
      file-name: change-ext file.file-name
    break

function change-ext file, ext = \.html
  z = path.parse file
  z.ext = ext
  delete z.base
  path.format z

function build-html url, contents
  template
    .replace "{{1}}" if url then " src='#{url}'" else ""
    .replace "{{2}}" contents || ''

template = """
<!DOCTYPE html>
<html><head>
<script{{1}}>{{2}}</script>
</head><body></body></html>

"""
