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

module.exports = config

extensions = <[ .js .ls .json .yml .styl ]>

function common debug
  output:
    dir: \j2gtsp
    sourcemap: true
    plugins:
      !debug and rollup-plugin-terser.terser do
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

function config args

  web = common args.watch
  web <<<
    input:
      j2gtsp: \./src
  web.output <<<
    format: \iife
  web.output.plugins.push html!

  cli = common args.watch
  cli <<<
    input:
      cli: \./src/cli
  cli.output <<<
    format: \cjs
  cli.output.plugins.push cmd!

  return
    web
    cli
