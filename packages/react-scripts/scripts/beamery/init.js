'use strict';

const getDependencies = require('./dependencies');

module.exports = function(appPackage, args, command, spawn, useTypeScript) {
  // Set up dependencies.
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
