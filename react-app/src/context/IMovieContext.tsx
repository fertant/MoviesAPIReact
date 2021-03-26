import { IMovie } from '../components/molecules/MovieCard/IMovie';

export interface IMovieContext {
  movieDetails: IMovie;
  setMovieDetails: (movie: IMovie) => void;
}
