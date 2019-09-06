module.exports = function ({ config }) {
  // for showing the source of each story
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  });

  return config;
};
