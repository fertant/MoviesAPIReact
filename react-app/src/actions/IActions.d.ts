import { IMovie } from '../components/molecules/MovieCard/IMovie';

export interface IControlAction {
  type: string,
  modalType: string,
  visibility: boolean,
}

export interface IFilterAction {
  type: string,
  filterType: string,
  filterSetting: string,
}

export interface IMovieListAction {
  type: string,
  movies: Array<IMovie>,
}

export interface IMovieAction {
  type: string,
  movie?: IMovie,
  id?: number,
}

export interface IRequestAction {
  type: string,
  message?: string,
}
