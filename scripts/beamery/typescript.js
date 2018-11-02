'use strict';

module.exports = function(compilerOptions) {
  return Object.assign({}, compilerOptions, {
    baseUrl: {
      value: '.',
      reason: 'to support using paths for aliasing',
    },
    paths: {
      value: {
        '*': ['src/*'],
      },
      reason: 'to match NODE_PATH environment variable',
    },
  });
};
