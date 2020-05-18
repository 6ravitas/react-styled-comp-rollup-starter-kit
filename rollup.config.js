import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
    input: 'src/index.js',
    external: ['react', 'styled-components'],
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        sourcemap: true,
        globals: { 'styled-components': 'styled' }
    },
    plugins: [
        resolve(),
        babel({
            plugins: ['babel-plugin-styled-components'],
            exclude: 'node_modules/**',
        }),
        commonjs(),
        uglify,
    ],
}
