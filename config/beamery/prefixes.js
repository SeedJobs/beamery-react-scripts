'use strict';

const paths = require('../paths');
const appPackageJson = require(paths.appPackageJson);

// Use the `package.json` app name to simplify setup.
const appName = appPackageJson.name;
process.env.BMR_APP_NAME = appName;

module.exports = {
  // Webpack allows us to define a path in sources. This can be useful for
  // debugging against other applications.
  devtoolRoot: appName ? appName + ':///' : '',
  // This prefix is not used for `independent` builds.
  filenamePrefix: appName ? appName : 'APP-NAME-UNDEFINED',
};
