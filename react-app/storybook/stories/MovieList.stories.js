import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import MovieListComponent from '../../src/components/organisms/MovieList/MovieListComponent';
import theme from '../../src/components/theme/Theme';
import configureStore from '../../src/store/configureStore';

const store = configureStore();

export default {
  title: 'MovieAPI/Movie List',
  component: MovieListComponent,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <MovieListComponent {...args} />
    </Provider>
  </ThemeProvider>
);

export const List = Template.bind({});
List.args = {
  items: [
    {
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
    {
      id: 2,
      title: 'Black Panther',
      subtitle: 'Long live the king',
      description: 'King T\'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country\'s new leader. However, T\'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T\'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan "special forces"), and an American secret agent, to prevent Wakanda from being dragged into a world war.',
      rate: 7.3,
      duration: 134,
      img: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      yearOfRelease: '2018-02-07',
      genre: [
        'Action',
        'Adventure',
        'Fantasy',
        'Science Fiction',
      ],
    },
    {
      id: 3,
      title: 'Fifty Shades Freed',
      subtitle: 'Don\'t miss the climax',
      description: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      rate: 6.1,
      duration: 106,
      img: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      yearOfRelease: '2018-02-07',
      genre: [
        'Fantasy',
        'Adventure',
        'Science Fiction',
      ],
    },
  ],
};
