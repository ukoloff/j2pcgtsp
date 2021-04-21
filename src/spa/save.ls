require! <[
  ../svg/css
  ./graphics
  ../svg/pan
]>
module.exports = save

!function save
  console.log html!

function html
  """
  <!DOCTYPE html>
  <html><head>
  <title>#{ document.title }</title>
  <style>
  #{ css }
  </style>
  #{ pan }
  </head><body>
  #{ graphics! }
  </body></html>
  """
