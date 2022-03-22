require! <[ ./run ]>

try
  run!
catch err
  console.log "Error:", err.message
