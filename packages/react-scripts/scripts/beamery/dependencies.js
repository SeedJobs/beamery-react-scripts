'use strict';

const DEPENDENCIES = ['single-spa-react'];

const DEPENDENCIES_TYPES = DEPENDENCIES.concat(['@types/single-spa-react']);

const DEV_DEPENDENCIES = [
  // For Storybook
  '@babel/core',
  '@storybook/addon-actions',
  '@storybook/addon-knobs',
  '@storybook/addon-links',
  '@storybook/addons',
  '@storybook/react',
  'babel-loader',
  'node-sass',
  // For Stylelint
  'stylelint-config-recommended',
  'stylelint',
];

const DEV_DEPENDENCIES_TYPES = DEV_DEPENDENCIES.concat([
  '@types/storybook__addon-actions',
  '@types/storybook__addon-knobs',
  '@types/storybook__addon-links',
  '@types/storybook__react',
]);

module.exports = function(appPackage, useTypeScript) {
  const dependenciesObj = appPackage.dependencies || {};
  const devDependenciesObj = appPackage.devDependencies || {};

  const dependencies = (useTypeScript
    ? DEPENDENCIES_TYPES
    : DEPENDENCIES
  ).filter(dependency => dependenciesObj[dependency] !== 'undefined');
  const devDependencies = (useTypeScript
    ? DEV_DEPENDENCIES_TYPES
    : DEV_DEPENDENCIES
  ).filter(devDependency => devDependenciesObj[devDependency] !== 'undefined');

  return {
    dependencies,
    devDependencies,
  };
};
