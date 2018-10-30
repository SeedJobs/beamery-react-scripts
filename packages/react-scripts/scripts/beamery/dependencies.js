'use strict';

const DEPENDENCIES = [
  // Single SPA
  'single-spa-react',
  // Testing
  'enzyme-adapter-react-16',
  'enzyme-to-json',
  'enzyme',
];

const DEPENDENCIES_TYPES = DEPENDENCIES.concat([
  // Single SPA
  '@types/single-spa-react',
  // Testing
  '@types/enzyme-adapter-react-16',
  '@types/enzyme',
]);

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
  // For linting
  'stylelint-config-standard',
  'stylelint',
  // For development workflow
  'husky',
  'lint-staged',
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
