import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { IMovie } from '../../molecules/MovieCard/IMovie';
import { IMenuItem } from '../../molecules/Navigation/INavigation';
import NavigationComponent from '../../molecules/Navigation/NavigationComponent';
import MovieListComponent from '../../organisms/MovieList/MovieListComponent';
import { MainWrapper, MovieCountWrapper } from './MovieListWrappers';
import LoaderComponent from '../../atoms/Loader/LoaderComponent';
import { actionApiFilterRequest } from '../../../actions/Actions';

const filters: Array<IMenuItem> = [
  { title: 'All' },
  { title: 'Documentary' },
  { title: 'Comedy' },
  { title: 'Horror' },
  { title: 'Crime' },
  { title: 'Action & Adventure' },
];

const MovieListWrapperComponent: FunctionComponent = () => {
  const query = useSelector(({ filters: { movieQuery: query } }) => query);
  const type = useSelector(({ filters: { movieType: type } }) => type);
  const sort = useSelector(({ filters: { movieSort: sort } }) => sort);
  const loading = useSelector(({ requestApi: { isLoading: loading } }) => loading);
  // eslint-disable-next-line max-len
  const filteredMovies = useSelector(({ moviesList: { moviesList: filteredMovies } }) => filteredMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionApiFilterRequest());
  }, [type, sort, query]);

  return (
    <MainWrapper>
      <NavigationComponent filters={filters} />
      <MovieCountWrapper>
        <strong>{filteredMovies.length}</strong>
        &nbsp;
        movies found
      </MovieCountWrapper>
      {(() => {
        if (loading) return <LoaderComponent />;
        if (filteredMovies.length > 0) {
          return <MovieListComponent items={filteredMovies} />;
        }
        return '';
      })()}
    </MainWrapper>
  );
};

export default MovieListWrapperComponent;
