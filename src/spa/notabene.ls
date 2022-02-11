require! <[
  ../m
]>

exports <<<
  view: ->
    m.fragment do
        m \h2 \Note:
        m \ul,
          m \li,
            m \a href: \https://github.com/ukoloff/j2pcgtsp, 'Source code'
            \@GitHub
          if location.host
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
