require! <[
  ../m
]>

module.exports = hello

!function hello
  m.mount document.body, body

body =
  view: ->
    m.fragment do
      m \h1 'Hello, world!'
      'Hi there!'

