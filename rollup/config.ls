require! <[
  rollup-plugin-terser
  rollup-plugin-sizes
  ./upgrade
  ./livescript
]>
require! {
  \@rollup/plugin-node-resolve : resolve
  \@rollup/plugin-commonjs : commonjs
}

extensions = <[ .js .ls ]>

exports <<<
  input: \./src

  output:
    file: \dst/j2pcgtsp.js
    format: \iife
    sourcemap: true

  plugins:
    livescript!
    rollup-plugin-terser.terser!
    upgrade rollup-plugin-sizes!
    commonjs {extensions}
    resolve {extensions}
