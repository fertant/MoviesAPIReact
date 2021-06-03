import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import './App.scss';
import theme from './components/theme/Theme';

import MovieListWrapperComponent from './components/templates/MovieList/MovieListWrapperComponent';
import NotFoundComponent from './components/templates/404/NotFoundComponent';
import FooterComponent from './components/organisms/Footer/FooterComponent';
import DialogComponent from './components/molecules/Dialog/DialogComponent';
import AlertComponent from './components/atoms/Alert/AlertComponent';

function App({
  Router,
  location,
  context,
  store
}) {
  return (
    <Router location={location} context={context}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={MovieListWrapperComponent} />
            <Route path="/film/:id" component={MovieListWrapperComponent} />
            <Route path="/search/:search" component={MovieListWrapperComponent} />
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

export default hot(module)(App);
