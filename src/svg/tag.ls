require! <[ ./path ]>
module.exports = tag

function tag points, attributes = {}
  if "string" != typeof points
    points = path points
  attrs = ""
  for k, v of attributes when k != \title
    attrs += """ #{k}="#{v}"
    """
  """
  <path#{attrs} d="#{points}">
  #{
    if attributes.title
      "<title>#{attributes.title}</title>"
    else
      ""
  }</path>
  """
