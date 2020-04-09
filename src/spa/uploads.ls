require! <[
  ./formats
]>

module.exports = uploads

!function uploads files
  alert <| Array.from files .map (.name)
