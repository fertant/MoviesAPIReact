import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IMovie } from '../MovieCard/IMovie';
import { Button } from '../../atoms/Button/Button';
import {
  FormFooter,
  FormTitle,
  FormElement,
} from './Form';
import { actionDeleteMovie, actionControlVisibility } from '../../../actions/Actions';

const DeleteMovieForm: FunctionComponent = () => {
  const movie: IMovie = useSelector(({ selectedMovie: { selectedMovie: movie } }) => movie);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(actionDeleteMovie(movie));
    dispatch(actionControlVisibility('delete', false));
  };

  return (
    <FormElement onSubmit={handleSubmit}>
      <FormTitle>DELETE MOVIE</FormTitle>
      Are you sure you want to delete this movie?
      <FormFooter>
        <Button type="submit">CONFIRM</Button>
      </FormFooter>
    </FormElement>
  );
};

export default DeleteMovieForm;
