require! <[
  ../m
  ./head
  ./body
]>

module.exports = hello

!function hello
  m.mount document.head, head
  m.mount document.body, body
