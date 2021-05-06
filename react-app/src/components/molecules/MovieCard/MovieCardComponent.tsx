import React, { FunctionComponent, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IMovieProps } from './IMovie';
import {
  MovieItemWrapper,
  MovieScreen,
  MovieTitleWrapper,
  MovieTitle,
  EditIcon,
  CloseIcon,
  EditMenu,
  EditMenuItem,
  ThreeDots,
  MovieYear,
  MovieGenre,
} from './MovieCard';
import { actionControlVisibility, actionSelectMovie } from '../../../actions/Actions';

const MovieCardComponent: FunctionComponent<IMovieProps> = ({ item }) => {
  const [editMenuOpened, setEditActive] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onEditMovie = () => {
    dispatch(actionSelectMovie(item));
    dispatch(actionControlVisibility('edit', true));
    setEditActive(false);
  };
  const onDeleteMovie = () => {
    dispatch(actionSelectMovie(item));
    dispatch(actionControlVisibility('delete', true));
    setEditActive(false);
  };
  const onShowMovieDetails = useCallback(() => {
    dispatch(actionSelectMovie(item));
    dispatch(actionControlVisibility('details', true));
    history.push(`/film/${item.id}`);
  }, [item]);

  return (
    <MovieItemWrapper>
      <EditIcon onClick={() => setEditActive(true)}>
        <ThreeDots />
      </EditIcon>
      <EditMenu editOpened={editMenuOpened}>
        <CloseIcon onClick={() => setEditActive(false)} />
        <EditMenuItem onClick={onEditMovie}>Edit</EditMenuItem>
        <EditMenuItem onClick={onDeleteMovie}>Delete</EditMenuItem>
      </EditMenu>
      <MovieScreen src={item.img} onClick={onShowMovieDetails} />
      <MovieTitleWrapper>
        <MovieTitle className="title">{ item.title }</MovieTitle>
        <MovieYear>{ item.yearOfRelease }</MovieYear>
      </MovieTitleWrapper>
      <MovieGenre className="genre">{ item.genre.join(', ') }</MovieGenre>
    </MovieItemWrapper>
  );
};

export default MovieCardComponent;
