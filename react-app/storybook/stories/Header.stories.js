import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import HeaderComponent from '../../src/components/organisms/Header/HeaderComponent';
import theme from '../../src/components/theme/Theme';
import configureStore from '../../src/store/configureStore';

const store = configureStore();

export default {
  title: 'MovieAPI/Header',
  component: HeaderComponent,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <HeaderComponent {...args} />
    </Provider>
  </ThemeProvider>
);

export const Header = Template.bind({});
Header.args = {
  search: 'Freed',
};
