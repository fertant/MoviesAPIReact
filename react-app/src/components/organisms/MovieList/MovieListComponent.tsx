import React, { FunctionComponent } from 'react';

import { IMovie } from '../../molecules/MovieCard/IMovie';
import MovieCardComponent from '../../molecules/MovieCard/MovieCardComponent';
import { IMovieList } from './IMovieList';
import ErrorBoundary from '../../atoms/ErrorBoundary/ErrorBoundary';
import MoviesWrapper from './MovieList';

const MovieListComponent: FunctionComponent<IMovieList> = ({ items }) => (
  <ErrorBoundary>
    <MoviesWrapper>
      {
        items.map((movie: IMovie) => (
          <MovieCardComponent key={movie.id}
                              item={movie}/>
        ))
      }
    </MoviesWrapper>
  </ErrorBoundary>
);

export default MovieListComponent;
