'use strict';

module.exports = baseConfig => {
  baseConfig.resolve.extensions.push('.ts', '.tsx');
  baseConfig.module.rules[0].test = /\.(mjs|jsx?|tsx?)$/;
  baseConfig.module.rules.push({
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
  return baseConfig;
};
