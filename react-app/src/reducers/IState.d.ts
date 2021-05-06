import { IMovieAction } from '../actions/IActions';
import { IMovie } from '../components/molecules/MovieCard/IMovie';

export interface IModal {
  add: boolean,
  edit: boolean,
  delete: boolean,
  details: boolean,
  alert: boolean,
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
  selectedMovieDetail: number,
}

export interface IMovieDetail {
  movieDetail: IMovie | null,
}

export interface IMovieActionState {
  movieObject: IMovie | null,
}

export interface IState {
  modals: IModal,
  filters: IFilter,
  moviesList: IMoviesList,
  requestApi: IRequestProcess,
  selectedMovie: ISelectedMovie,
  movieDetail: IMovieDetail,
  movieAction: IMovieAction,
}
