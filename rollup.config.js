import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const { name, peerDependencies, dependencies } = pkg;

// enables a useful sourcemap "directory" in the debugger for more useful grouping of glu modules
function sourcemapPathTransform(relativePath) {
  return `./${pkg.name}/${relativePath.replace(/^(\.\.[\\/])*/, '')}`;
}

const umdName = name
  .replace('@', '')
  .replace('/', '-')
  .split('-')
  .map((value, index) => (index ? value[0].toUpperCase() + value.slice(1) : value))
  .join('');

export default {
  input: 'src/index.js',
  output: [{
    format: 'esm',
    file: 'dist/esm/index.js',
    sourcemap: true,
    sourcemapPathTransform
  }, {
    format: 'cjs',
    file: 'dist/cjs/index.js',
    sourcemap: true,
    sourcemapPathTransform
  }, {
    format: 'umd',
    file: 'dist/umd/index.js',
    name: umdName,
    globals: {
      '@glu/theming': 'gluTheming',
      'prop-types': 'PropTypes',
      react: 'React'
    }
  }],
  external: Object.keys(peerDependencies).concat(Object.keys(dependencies || {})),
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx']
    })
  ]
};
