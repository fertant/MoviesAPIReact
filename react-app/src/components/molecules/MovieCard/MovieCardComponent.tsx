import React, { FunctionComponent, useState } from 'react';

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
import { useDispatch } from '../../../hooks/CustomHooks';
import { actionControlVisibility } from '../../../context/AppContext';


const MovieCardComponent: FunctionComponent<IMovieProps> = ({ item }) => {
  const [editMenuOpened, setEditActive] = useState(false);
  const dispatch = useDispatch();
  const onEditMovie = () => {
    dispatch(actionControlVisibility('edit', true));
    setEditActive(false);
  };
  const onDeleteMovie = () => {
    dispatch(actionControlVisibility('delete', true));
    setEditActive(false);
  };

  return (
    <MovieItemWrapper>
      <EditIcon onClick={() => setEditActive(true)}>
        <ThreeDots />
      </EditIcon>
      <EditMenu editOpened={editMenuOpened}>
        <CloseIcon onClick={() => setEditActive(false)}/>
        <EditMenuItem onClick={onEditMovie}>Edit</EditMenuItem>
        <EditMenuItem onClick={onDeleteMovie}>Delete</EditMenuItem>
      </EditMenu>
      <MovieScreen src={ item.img }/>
      <MovieTitleWrapper>
        <MovieTitle>{ item.title }</MovieTitle>
        <MovieYear>{ item.yearOfRelease }</MovieYear>
      </MovieTitleWrapper>
      <MovieGenre>{ item.genre.join(', ') }</MovieGenre>
    </MovieItemWrapper>
  );
};

export default MovieCardComponent;
