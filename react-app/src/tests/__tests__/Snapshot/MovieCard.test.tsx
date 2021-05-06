import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import MovieCardComponent from '../../../components/molecules/MovieCard/MovieCardComponent';
import { IMovie } from '../../../components/molecules/MovieCard/IMovie';
import theme from '../../../components/theme/Theme';
import configureStore from '../../../store/configureStore';

const movieObj: IMovie = {
  id: 1,
  title: 'Moana',
  subtitle: 'Moana',
  description: 'description',
  rate: 5,
  duration: 30,
  yearOfRelease: '2020',
  genre: ['Horror'],
};

test('Test render Movie Card', () => {
  const store = configureStore();
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MovieCardComponent item={movieObj} />
      </Provider>
    </ThemeProvider>,
  );
  const card = component.toJSON();
  expect(card).toMatchSnapshot();
});
