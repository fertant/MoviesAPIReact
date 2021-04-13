import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';

import AddMovieForm from '../../../components/molecules/Forms/AddMovieForm';
import theme from '../../../components/theme/Theme';
import * as actions from '../../../actions/Actions';
import { IMovie } from '../../../components/molecules/MovieCard/IMovie';

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

test('AddMovieForm check text inserted', () => {
  const middlewares: Array<any> = [];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  const form = mount(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AddMovieForm />
      </Provider>
    </ThemeProvider>,
  );
  act(() => {
    form.update();
    form.find('[type="submit"]').at(0).simulate('submit');
    form.find('[type="submit"]').at(1).simulate('submit');
  });
  //expect(store.getState).toEqual({});
  //expect(store.getActions()).toEqual(actions.actionCreateMovie(movieObj));
  expect(form.find('h2').text()).toEqual('ADD MOVIE');
});
