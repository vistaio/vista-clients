
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import packageJson from './package.json';

export default [{
    input: 'src/index.ts',
    external: ['@vista.io/vista-api-client', '@mui/material', '@mui/styles', '@emotion/react', '@emotion/styled', 'react'],
    output: [
        {
            file: packageJson.exports.require,
            format: 'cjs',
            sourcemap: true,
            name: 'react-lib'
        },
        {
            file: packageJson.exports.import,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve({ includeDependencies: true }),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss(),
        terser()
    ]
}, {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
}];
