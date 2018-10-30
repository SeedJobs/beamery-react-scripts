module.exports = (baseConfig, env) => {
  baseConfig.resolve.extensions.push('.ts', '.tsx');
  baseConfig.module.rules[0].test = /\.(mjs|jsx?|tsx?)$/;
  return baseConfig;
};
