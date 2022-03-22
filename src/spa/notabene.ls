require! <[
  ../m
  ../homepage
]>

exports <<<
  view: ->
    m.fragment do
        m \h2 \Note:
        m \ul,
          m \li,
            m \a,
              href: homepage.homepage
              target: \_blank
              'Source code'
            \@GitHub
          m links if location.host

links =
  view: ->
    m.fragment do
      m \li,
        "You can save "
        m \a,
          href: \j2gtsp.html
          target: \_blank
          download: \j2gtsp.html
          type: \application/octet-stream
          "this file"
        " (Hint: Right click + Save as) "
        "and run it locally"
      m \li,
        "Command line (CLI) version (Node.js required):"
        m \ul,
          m \li,
            "For ",
            m 'a',
              href: \j2gtsp
              target: \_blank
              download: \j2gtsp
              type: \application/octet-stream
              "Linux"
            " // chmod +x j2gtsp"
          m \li,
            "For ",
            m 'a',
              href: \j2gtsp.bat
              target: \_blank
              download: \j2gtsp.bat
              type: \application/octet-stream
              "Windows"
