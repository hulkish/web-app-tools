import buildEnvPreset from 'babel-preset-env';

const envPluginOptions = {
  targets: {
    node: 'current'
  },
  useBuiltIns: 'entry',
  modules: false
};

export default function buildPreset(context, options) {
  return {
    plugins: [
      require('babel-plugin-syntax-dynamic-jsx'),
      require('babel-plugin-syntax-dynamic-import'),
      require('babel-plugin-dynamic-import-node'),
      require('babel-plugin-transform-react-constant-elements'),
      ...buildEnvPreset(context, envPluginOptions).plugins
    ]
  };
}
