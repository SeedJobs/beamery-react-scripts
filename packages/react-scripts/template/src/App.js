import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

// Currently, the root component for single-spa-react must be a class component.
// https://github.com/CanopyTax/single-spa-react/issues/50
class App extends Component {
  componentDidCatch () {
    // This should be implemented so that the entire application doesn't unmount on an error.
    // https://github.com/CanopyTax/single-spa-react#notes
  }

  render () {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
