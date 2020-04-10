require! <[
  @rollup/plugin-commonjs
  @rollup/plugin-node-resolve
  rollup-plugin-terser
  ./livescript
  ./html
]>

extensions = <[ .js .ls ]>

exports <<<
  input: \./src

  output:
    file: \j2gtsp/j2gtsp.js
    format: \iife
    sourcemap: true

  plugins:
    livescript!
    rollup-plugin-terser.terser do
      output:
        max_line_len: 80
        semicolons: false
    plugin-commonjs {extensions}
    plugin-node-resolve {extensions}
    html!
