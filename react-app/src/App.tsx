import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.scss';
import theme from './components/theme/Theme';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

import MovieListWrapperComponent from './components/templates/MovieList/MovieListWrapperComponent';
import NotFoundComponent from './components/templates/404/NotFoundComponent';
import FooterComponent from './components/organisms/Footer/FooterComponent';
import DialogComponent from './components/molecules/Dialog/DialogComponent';
import AlertComponent from './components/atoms/Alert/AlertComponent';

const store = configureStore();
store.runSaga(rootSaga);

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Switch>
            <Route path="/film/:id" component={MovieListWrapperComponent} />
            <Route path="/search/:search" component={MovieListWrapperComponent} />
            <Route path="/" exact component={MovieListWrapperComponent} />
            <Route path="*" component={NotFoundComponent} />
          </Switch>
          <FooterComponent />
          <DialogComponent type="add" />
          <DialogComponent type="edit" />
          <DialogComponent type="delete" />
          <AlertComponent />
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
