
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [{
    input: './src/index.ts',
    external: ['axios'],
    output: [
        {
            file: 'dist/vista.cjs',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/vista.js',
            format: 'esm',
            sourcemap: true,
        }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
        })
    ],
}, {
    input: './dist/dts/index.d.ts',
    output: [{ file: 'dist/vista.d.ts', format: 'es' }],
    plugins: [dts()],
}];
