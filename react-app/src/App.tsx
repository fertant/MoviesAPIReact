import React from 'react';
import { ThemeProvider } from "styled-components";

import './App.scss';
import theme from './components/theme/Theme';

import CopyrightComponent from './components/atoms/Copyright/CopyrightComponent';
import ButtonComponent from './components/atoms/Button/ButtonComponent';
import SearchComponent from './components/molecules/Search/SearchComponent';
import HeaderComponent from './components/organisms/Header/HeaderComponent';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CopyrightComponent />
        <ButtonComponent type='search' text='Search' />
        <ButtonComponent type='add' text='+ add movie' />
        <SearchComponent placeholder={'What do you want to watch?'}/>
        <HeaderComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
