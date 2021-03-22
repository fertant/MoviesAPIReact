import React from 'react';
import { ThemeProvider } from 'styled-components';

import './App.scss';
import theme from './components/theme/Theme';

import HeaderComponent from './components/organisms/Header/HeaderComponent';
import MovieListWrapperComponent from './components/templates/MovieList/MovieListWrapperComponent';
import FooterComponent from './components/organisms/Footer/FooterComponent';
import DialogComponent from './components/molecules/Dialog/DialogComponent';
import AppProvider from './context/AppContext';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <HeaderComponent />
          <MovieListWrapperComponent />
          <FooterComponent />
          <DialogComponent type='add' />
          <DialogComponent type='edit' />
          <DialogComponent type='delete' />
        </AppProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
