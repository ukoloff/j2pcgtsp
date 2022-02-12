require! <[
  ../model/formats
  ../model/html
]>
module.exports = save

#
!function save
  download "#{formats.discrete.name}.html" html!

# https://stackoverflow.com/a/18197511
!function download filename, text
  pom = document.create-element \a
  pom.set-attribute \href "data:text/plain;charset=utf-8,#{encodeURIComponent text}"
  pom.set-attribute \download filename

  if document.create-event
    event = document.create-event \MouseEvents
    event.init-event \click true, true
    pom.dispatch-event event
  else
    pom.click!
