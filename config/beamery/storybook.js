'use strict';

// TODO: Rework this once Storybook PR is merged.
// https://github.com/storybooks/storybook/pull/4712
module.exports = (baseConfig, env, config) => {
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules[0].test = /\.(mjs|jsx?|tsx?)$/;
  config.module.rules.push({
    test: /\.module\.s?css$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 2,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      require.resolve('sass-loader'),
    ],
  });
  return config;
};
