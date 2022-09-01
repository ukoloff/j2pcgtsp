require! <[
  ./svg
  ./state
  ../svg/css
  ../svg/pan
]>
module.exports = html

function html
  """
  <!DOCTYPE html>
  <html><head>
  <title>PCGTSP Visualization</title>
  <style>
  #{ css }
  </style>
  #{ pan! }
  </head><body>
  #{ svg! }
  #{path-len!}
  </body></html>
  """

function path-len
  if state.route-length
    """
    <!--
    Route Length     : #{that}
    -->
    """
  else
    ""
