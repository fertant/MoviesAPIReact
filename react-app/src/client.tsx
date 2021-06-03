import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.hydrate(
  <React.StrictMode>
    <App Router={BrowserRouter}
         store={store}
    />
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
