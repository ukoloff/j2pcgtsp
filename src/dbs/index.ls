#
# Read DBS in JSON format
#
require! <[ ../assert ]>

module.exports = read-DBS
read-DBS.success = success

function read-DBS txt
  JSON.parse txt
    assert ..length

function success dbs
  names = dbs.map (.partid)
  count = names.length
  names = unique names
  "#{count} parts: #{
    names.slice 0 3 .join ', '}#{
    if names.length > 3 then '...' else '.'}"

function unique arr
  seen = {}
  arr.filter ->
    if seen[it]
      false
    else
      seen[it] = true
