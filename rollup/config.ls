require! <[
  rollup-plugin-terser
  ./livescript
]>

require! {
  \@rollup/plugin-commonjs : commonjs
  \@rollup/plugin-node-resolve : resolve
  \@rollup/plugin-html : auto-html
}
extensions = <[ .js .ls ]>

exports <<<
  input: \./src

  output:
    file: \j2gtsp/j2gtsp.js
    format: \iife
    sourcemap: true

  plugins:
    livescript!
    rollup-plugin-terser.terser!
    commonjs {extensions}
    resolve {extensions}
    auto-html do
      title: 'DBS / JSON / GTSP Visualisation'
      attributes: {}
