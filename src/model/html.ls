require! <[
  ./svg
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
  </body></html>
  """
