import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IMovie } from '../../molecules/MovieCard/IMovie';
import { IMenuItem } from '../../molecules/Navigation/INavigation';
import NavigationComponent from '../../molecules/Navigation/NavigationComponent';
import MovieListComponent from '../../organisms/MovieList/MovieListComponent';
import { MainWrapper, MovieCountWrapper, NoMovieFound } from './MovieListWrappers';
import LoaderComponent from '../../atoms/Loader/LoaderComponent';
import {
  actionApiFilterRequest,
  actionSetFilter,
  actionSelectMovieId,
  actionControlVisibility,
} from '../../../actions/Actions';
import HeaderComponent from '../../organisms/Header/HeaderComponent';

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
  const { id, search } = useParams();
  if (search) dispatch(actionSetFilter('movieQuery', search));
  if (id) {
    dispatch(actionSelectMovieId(id));
    dispatch(actionControlVisibility('details', true));
  }

  useEffect(() => {
    dispatch(actionApiFilterRequest());
  }, [type, sort, query]);

  return (
    <div>
      <HeaderComponent />
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
          return <NoMovieFound>No Movie Found</NoMovieFound>;
        })()}
      </MainWrapper>
    </div>
  );
};

export default MovieListWrapperComponent;
