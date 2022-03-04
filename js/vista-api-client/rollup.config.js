
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    external: ['axios'],
    output: [
        {
            file: 'dist/vista.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/vista.esm.js',
            format: 'esm',
            sourcemap: true,
        }
    ],
    plugins: [
        typescript(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
        })
    ],
};
