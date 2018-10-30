import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

const appName = process.env.APP_NAME || 'app-name';

function domElementGetter() {
  // Make sure there is a `div` for us to render to.
  const container = appName;
  let el = document.getElementById(container);
  if (!el) {
    el = document.createElement('div');
    el.id = container;
    document.body.appendChild(el);
  }
  return el;
}

function hyphenToCamelCase(str: string) {
  return str.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
}

const app = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: App,
});

export function bootstrap(options: any = {}) {
  return app.bootstrap(options, {});
}

export function mount(options: any = {}) {
  return app.mount(options, {});
}

export function unmount(options: any = {}) {
  return app.unmount(options, {});
}

declare global { interface Window { bmr: any; } }
window.bmr = window.bmr || {};
window.bmr[hyphenToCamelCase(appName)] = app;
