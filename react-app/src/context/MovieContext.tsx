import React, { createContext, useState } from 'react';

import { IMovie } from "../components/molecules/MovieCard/IMovie";
import { IMovieContext } from "./IMovieContext";
import { movies } from '../components/templates/MovieList/MovieListWrapperComponent';

export const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [movieDetails, setMovieDetails] = useState<IMovie>(movies[0]);
  const movieContext = { movieDetails, setMovieDetails };

  return (
    <MovieContext.Provider value={movieContext}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
