import React, { FunctionComponent, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IMenuItem } from '../../molecules/Navigation/INavigation';
import { MainWrapper, MovieCountWrapper, NoMovieFound } from './MovieListWrappers';
import LoaderComponent from '../../atoms/Loader/LoaderComponent';
import {
  actionApiFilterRequest,
  actionSetFilter,
  actionSelectMovieId,
  actionControlVisibility,
} from '../../../actions/Actions';
import NavigationComponent from '../../molecules/Navigation/NavigationComponent';
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import ErrorBoundary from '../../atoms/ErrorBoundary/ErrorBoundary';
import MovieListComponent from '../../organisms/MovieList/MovieListComponent';

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
  const movieDetails = useSelector(({ movieDetail: { movieDetail: movie } }) => movie);
  // eslint-disable-next-line max-len
  const filteredMovies = useSelector(({ moviesList: { moviesList: filteredMovies } }) => filteredMovies);
  const dispatch = useDispatch();
  const { id, search } = useParams();
  if (search) dispatch(actionSetFilter('movieQuery', search));
  if (filteredMovies.length === 0) {
    dispatch(actionApiFilterRequest());
  }
  if (id && !movieDetails) {
    dispatch(actionSelectMovieId(id));
    dispatch(actionControlVisibility('details', true));
  }

  useEffect(() => {
    dispatch(actionApiFilterRequest());
  }, [type, sort, query]);

  return (
    <ErrorBoundary>
      <HeaderComponent search={search} />
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
    </ErrorBoundary>
  );
};

export default MovieListWrapperComponent;
