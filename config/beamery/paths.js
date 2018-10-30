'use strict';

const ENVS = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  STAGING: 'staging',
  INDEPENDENT: 'independent',
};

const paths = {
  buildPath: 'dist',
  publicPath: false,
  appIndexJs: 'src/index.full',
};

switch (process.env.BMR_ENV) {
  case ENVS.PRODUCTION:
    paths.publicPath = 'https://storage.googleapis.com/beamery/';
    break;
  case ENVS.STAGING:
    paths.buildPath = '../app-bath/dist';
    break;
  case ENVS.DEVELOPMENT:
    paths.buildPath = '../app-bath/dev';
    break;
  case ENVS.INDEPENDENT:
  default:
    paths.appIndexJs = 'src/index';
    break;
}

module.exports = paths;
