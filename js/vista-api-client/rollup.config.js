
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index',
    output: [
        {
            file: 'dist/vista.js',
            format: 'cjs'
        }
    ],
    plugins: [
        babel({
            exclude: "node_modules/**"
        })
    ],
};
