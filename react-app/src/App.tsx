import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './App.scss';
import theme from './components/theme/Theme';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

import HeaderComponent from './components/organisms/Header/HeaderComponent';
import MovieListWrapperComponent from './components/templates/MovieList/MovieListWrapperComponent';
import FooterComponent from './components/organisms/Footer/FooterComponent';
import DialogComponent from './components/molecules/Dialog/DialogComponent';
import AlertComponent from './components/atoms/Alert/AlertComponent';

const store = configureStore();
store.runSaga(rootSaga);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <HeaderComponent />
          <MovieListWrapperComponent />
          <FooterComponent />
          <DialogComponent type="add" />
          <DialogComponent type="edit" />
          <DialogComponent type="delete" />
          <AlertComponent />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
