import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import MovieCardComponent from '../../src/components/molecules/MovieCard/MovieCardComponent';
import theme from '../../src/components/theme/Theme';
import configureStore from '../../src/store/configureStore';

const store = configureStore();

export default {
  title: 'MovieAPI/Movie Card',
  component: MovieCardComponent,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <MovieCardComponent {...args} />
    </Provider>
  </ThemeProvider>
);

export const Card = Template.bind({});
Card.args = {
  key: 1,
  item: {
    id: 1,
    title: 'Fifty Shades Freed',
    subtitle: 'Don\'t miss the climax',
    description: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    rate: 6.1,
    duration: 106,
    img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    yearOfRelease: '2018-02-07',
    genre: [
      'Drama',
      'Romance',
    ],
  },
};
