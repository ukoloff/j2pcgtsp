require! <[ ./path ]>
module.exports = tag

function tag points, attributes = {}
  attrs = ""
  for k, v of attributes
    attrs += """ #{k}="#{v}"
    """
  """
  <path#{attrs} d="#{path points}">
  #{
    if attributes.title
      "<title>#{attributes.title}</title>"
    else
      ""
  }</path>
  """
