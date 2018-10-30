'use strict';

const envs = require('./envs');

const paths = {
  buildPath: 'dist',
  publicPath: false,
  appIndexJs: 'src/index.full',
};

switch (process.env.BMR_ENV) {
  case envs.PRODUCTION:
    paths.publicPath = 'https://storage.googleapis.com/beamery/';
    break;
  case envs.STAGING:
    paths.buildPath = '../app-bath/dist';
    break;
  case envs.DEVELOPMENT:
    paths.buildPath = '../app-bath/dev';
    break;
  case envs.INDEPENDENT:
  default:
    paths.appIndexJs = 'src/index';
    break;
}

module.exports = paths;
