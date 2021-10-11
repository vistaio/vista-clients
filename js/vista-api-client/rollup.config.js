
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index',
    output: [
        {
            file: 'dist/vista.js',
            format: 'cjs',
        },
        {
            file: 'dist/vista.esm.js',
            format: 'esm',
        }
    ],
    plugins: [
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
        })
    ],
};
