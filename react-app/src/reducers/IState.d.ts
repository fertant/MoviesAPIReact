import { IMovie } from '../components/molecules/MovieCard/IMovie';

export interface IModal {
  add: boolean,
  edit: boolean,
  delete: boolean,
}

export interface IFilter {
  movieQuery: string,
  movieType: string,
  movieSort: string,
}

export interface IRequestProcess {
  isLoading: boolean,
  success?: string,
  error?: string,
}

export interface IMoviesList {
  moviesList: Array<IMovie>,
}

export interface ISelectedMovie {
  selectedMovie: IMovie | null,
}

export interface IMovieDetail {
  movieDetail: IMovie | null,
}

export interface IMovieActionState {
  movieObject: IMovie | null,
}
