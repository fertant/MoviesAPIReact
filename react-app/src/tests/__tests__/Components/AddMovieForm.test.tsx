import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddMovieForm from '../../../components/molecules/Forms/AddMovieForm';
import theme from '../../../components/theme/Theme';
import * as actions from '../../../actions/Actions';

test('AddMovieForm check text inserted', async () => {
  const addMovieHandler = jest.fn();
  const middlewares: Array<any> = [];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AddMovieForm addMovieHandler={addMovieHandler} />
      </Provider>
    </ThemeProvider>,
  );
  store.clearActions();
  fireEvent.click(await screen.findByText('RESET'));
  expect(store.getActions()).toEqual([actions.actionControlVisibility('add', false)]);

  store.clearActions();
  userEvent.type(screen.getAllByRole('textbox')[0], 'Moana');
  userEvent.type(screen.getAllByRole('textbox')[1], '2018-03-31');
  userEvent.type(screen.getAllByRole('textbox')[2], 'http://www.moana.com');
  userEvent.type(screen.getAllByRole('textbox')[4], 'description');
  userEvent.type(screen.getAllByRole('textbox')[5], '65');
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() => {
    expect(addMovieHandler).toHaveBeenCalledWith({
      description: 'description',
      duration: 65,
      genre: [],
      id: NaN,
      img: 'http://www.moana.com',
      rate: 0,
      subtitle: 'Moana',
      title: 'Moana',
      yearOfRelease: '2018-03-31',
    });
  });
});
