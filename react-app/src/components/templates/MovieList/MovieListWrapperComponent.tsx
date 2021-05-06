import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IMenuItem } from '../../molecules/Navigation/INavigation';
import {
  moviesListSelector,
  movieDetailsSelector,
  requestSelector,
  querySelector,
  typeSelector,
  sortSelector,
} from '../../../selectors';
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

const MovieListWrapperComponentWithProps: FunctionComponent = (props: any) => {
  const {
    filteredMovies,
    movieDetails,
    loading,
    query,
    type,
    sort,
  } = props;
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

const mapStateToProps = (state: any) => (
  {
    filteredMovies: moviesListSelector(state),
    movieDetails: movieDetailsSelector(state),
    loading: requestSelector(state),
    query: querySelector(state),
    type: typeSelector(state),
    sort: sortSelector(state),
  }
);
const MovieListWrapperComponent = connect(mapStateToProps)(MovieListWrapperComponentWithProps);

export default MovieListWrapperComponent;
