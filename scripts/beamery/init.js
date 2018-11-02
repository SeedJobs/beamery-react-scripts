'use strict';

const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const spawn = require('react-dev-utils/crossSpawn');
const getDependencies = require('./dependencies');

const SCRIPT_GLOB = './src/**/*.[j|t]s?(x)';
const STYLE_GLOB = './src/**/*.?(s)css';

module.exports = function(appPath, args, command, useTypeScript) {
  const appPackage = require(path.join(appPath, 'package.json'));

  appPackage.scripts = {
    start: 'BMR_ENV=development react-scripts start',
    'start-independent': 'react-scripts start',
    storybook: 'start-storybook -p 3001',
    build: 'BMR_ENV=production react-scripts build',
    'build-dev': 'BMR_ENV=development react-scripts build',
    'build-staging': 'BMR_ENV=staging react-scripts build',
    'build-storybook': 'build-storybook',
    lint: 'yarn lint-scss && yarn lint-scripts',
    'lint-scripts': `eslint '${SCRIPT_GLOB}'`,
    'lint-scss': `stylelint '${STYLE_GLOB}'`,
    test: 'react-scripts test --colors',
    'test-coverage': 'yarn test --coverage',
    'test-watch': 'yarn test --watch',
  };

  appPackage.stylelint = {
    extends: 'stylelint-config-standard',
  };

  appPackage.jest = {
    snapshotSerializers: ['enzyme-to-json/serializer'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.stories.*',
      '!src/**/(serviceWorker|setupTests).*',
    ],
  };

  appPackage['lint-staged'] = {
    [STYLE_GLOB]: ['yarn lint-scss --fix', 'git add'],
    [SCRIPT_GLOB]: ['yarn lint-scripts --fix --quiet', 'git add'],
  };

  appPackage.husky = {
    hooks: {
      'pre-commit': 'lint-staged',
      'pre-push': 'yarn test',
    },
  };

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(appPackage, null, 2) + os.EOL
  );

  // Set up dependencies. This must be done after the above.
  function addDependencies(depArr, isDev) {
    console.log(`Installing Beamery dependencies using ${command}...`);
    console.log();
    const _args = args.concat(depArr);

    if (isDev) {
      _args.push('-D');
    }

    const proc = spawn.sync(command, _args, { stdio: 'inherit' });
    if (proc.status !== 0) {
      console.error(`\`${command} ${args.join(' ')}\` failed`);
      return;
    }
  }

  const { dependencies, devDependencies } = getDependencies(
    appPackage,
    useTypeScript
  );

  if (dependencies.length) {
    addDependencies(dependencies);
  }
  if (devDependencies.length) {
    addDependencies(devDependencies, true);
  }
};
