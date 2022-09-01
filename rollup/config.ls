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

function common mangle
  output:
    dir: \j2gtsp
    sourcemap: true
    plugins:
      rollup-plugin-terser.terser do
        mangle: mangle
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
  mangle = !args.watch

  web = common mangle
  web <<<
    input:
      j2gtsp: \./src
  web.output <<<
    format: \iife
  web.output.plugins.push html!

  cli = common mangle
  cli <<<
    input:
      cli: \./src/cli
  cli.output <<<
    format: \cjs
  cli.output.plugins.push cmd!

  return
    web
    cli
