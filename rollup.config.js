import babel from 'rollup-plugin-babel';

const pkg = require('./package.json');

export default {
  entry: pkg.module,
  dest: pkg.main,
  format: 'umd',
  moduleName: pkg.name.replace(/(?:^|[-_])(\w)/g, (_, x) => x.toUpperCase()),
  plugins: [
    babel()
  ]
};
