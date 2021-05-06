import React, { FunctionComponent } from 'react';

import { IMovie } from '../../molecules/MovieCard/IMovie';
import MovieCardComponent from '../../molecules/MovieCard/MovieCardComponent';
import { IMovieList } from './IMovieList';
import MoviesWrapper from './MovieList';

const MovieListComponent: FunctionComponent<IMovieList> = ({ items }) => (
  <MoviesWrapper className="movie-listing">
    {
      items.map((movie: IMovie) => (
        <MovieCardComponent key={movie.id} item={movie} />
      ))
    }
  </MoviesWrapper>
);

export default MovieListComponent;
