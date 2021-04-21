import React, { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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
import ErrorBoundary from '../../atoms/ErrorBoundary/ErrorBoundary';

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
  if (search && filteredMovies.length === 0) dispatch(actionSetFilter('movieQuery', search));
  if (id && !movieDetails) {
    dispatch(actionSelectMovieId(id));
    dispatch(actionControlVisibility('details', true));
  }

  useEffect(() => {
    dispatch(actionApiFilterRequest());
  }, [type, sort, query]);

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default MovieListWrapperComponent;
