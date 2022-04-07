require! <[
  @rollup/plugin-commonjs
  @rollup/plugin-node-resolve
  @rollup/plugin-json
  @rollup/plugin-yaml
  rollup-plugin-terser
  rollup-plugin-styles
  ./livescript
  ./html
  ./cmd
]>

extensions = <[ .js .ls .json .yml .styl ]>

function common
  output:
    dir: \j2gtsp
    sourcemap: true
    plugins:
      rollup-plugin-terser.terser do
        output:
          max_line_len: 80
          semicolons: false
      ...

  external: require \module .builtin-modules

  plugins:
    rollup-plugin-styles do
      minimize: true
    plugin-json!
    plugin-yaml!
    livescript!
    plugin-commonjs {extensions}
    plugin-node-resolve {extensions}

web = common!
web <<<
  input:
    j2gtsp: \./src
web.output <<<
  format: \iife
web.output.plugins.push html!

cli = common!
cli <<<
  input:
    cli: \./src/cli
cli.output <<<
  format: \cjs
cli.output.plugins.push cmd!

module.exports =
  web
  cli
