require! <[
  @rollup/plugin-commonjs
  @rollup/plugin-node-resolve
  rollup-plugin-terser
  ./livescript
  ./html
]>

extensions = <[ .js .ls ]>

exports <<<
  input:
    j2gtsp: \./src
    cli: \./src/cli

  output:
    # file: \j2gtsp/cli.js
    dir: \j2gtsp
    format: \cjs
    sourcemap: true

  external: require \module .builtin-modules

  plugins:
    livescript!
    rollup-plugin-terser.terser do
      output:
        max_line_len: 80
        semicolons: false
    plugin-commonjs {extensions}
    plugin-node-resolve {extensions}
    html!
