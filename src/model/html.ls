require! <[
  ./svg
  ./state
  ../svg/dbs
  ../svg/pan
]>
module.exports = html

function html
  """
  <!DOCTYPE html>
  <html><head>
  <title>PCGTSP Visualization</title>
  <style>
  #{ dbs }
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
