import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        sourcemap: true,
    },
    external: ['react'],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
        }),
        commonjs(),
        uglify,
    ],
}
