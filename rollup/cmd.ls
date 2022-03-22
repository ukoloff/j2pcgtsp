require! <[
  path
]>

module.exports = cmd

function cmd options = {}
  name: \cmd
  generate-bundle: make-cmd

!function make-cmd output, bundle
  for , file of bundle when file.is-entry
    @emit-file do
      type: \asset
      source: """
        #!/usr/bin/env node
        #{file.code}
      """
      file-name: \j2gtsp
    @emit-file do
      type: \asset
      source: """
        0</*! :: See #{require \../package .homepage}
        @echo off
        node "%~f0" %*
        goto :EOF */0;
        #{file.code}
      """
      file-name: \j2gtsp.bat
    break

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
