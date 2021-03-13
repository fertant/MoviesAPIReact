import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';

import ComponentTitle from './components/ComponentTitle/ComponentTitle';
import CreateElementTitle from './components/CreateElementTitle/CreateElementTitle';
import FunctionalComponentTitle from './components/FunctionalComponentTitle/FunctionalComponentTitle';
import PureComponentTitle from './components/PureComponentTitle/PureComponentTitle';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Test gereral React components.
        </p>
      </header>
      <ComponentTitle type="Class Component" />
      <CreateElementTitle type="CreateElement" />
      <FunctionalComponentTitle type="Functional Component" />
      <PureComponentTitle type="Class Pure Component" />
    </div>
  );
}

export default App;
