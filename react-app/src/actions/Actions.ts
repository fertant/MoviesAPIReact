import {
  IControlAction,
  IFilterAction,
  IMovieAction,
  IRequestAction,
  IMovieListAction,
} from './IActions';
import { IMovie } from '../components/molecules/MovieCard/IMovie';

export enum ActionTypes {
  MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY',
  SET_FILTER = 'SET_FILTER',
  SET_MOVIES = 'SET_MOVIES',
  SELECT_MOVIE = 'SELECT_MOVIE',
  CREATE_MOVIE = 'CREATE_MOVIE',
  EDIT_MOVIE = 'EDIT_MOVIE',
  DELETE_MOVIE = 'DELETE_MOVIE',
  MOVIE_DETAIL = 'MOVIE_DETAIL',
  START_FILTER_REQUEST = 'START_FILTER_REQUEST',
  REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL',
  REQUEST_FAULT = 'REQUEST_FAULT',
}

export const actionControlVisibility = (
  modalType: string,
  visibility: boolean,
): IControlAction => ({
  type: ActionTypes.MODAL_VISIBILITY,
  modalType,
  visibility,
});

export const actionSetFilter = (
  filterType: string,
  filterSetting: string,
): IFilterAction => ({
  type: ActionTypes.SET_FILTER,
  filterType,
  filterSetting,
});

export const actionApiFilterRequest = (): IRequestAction => ({
  type: ActionTypes.START_FILTER_REQUEST,
});

export const actionApiResponseSuccessful = (
  message: string,
): IRequestAction => ({
  type: ActionTypes.REQUEST_SUCCESSFUL,
  message,
});

export const actionApiResponseFault = (
  message: string,
): IRequestAction => ({
  type: ActionTypes.REQUEST_FAULT,
  message,
});

export const actionSetMovies = (
  moviesList: Array<IMovie>,
): IMovieListAction => ({
  type: ActionTypes.SET_MOVIES,
  movies: moviesList,
});

export const actionCreateMovie = (
  movie: IMovie,
): IMovieAction => ({
  type: ActionTypes.CREATE_MOVIE,
  movie,
});

export const actionUpdateMovie = (
  movie: IMovie,
): IMovieAction => ({
  type: ActionTypes.EDIT_MOVIE,
  movie,
});

export const actionDeleteMovie = (
  movie: IMovie,
): IMovieAction => ({
  type: ActionTypes.DELETE_MOVIE,
  movie,
});

export const actionSelectMovie = (
  movie: IMovie,
): IMovieAction => ({
  type: ActionTypes.SELECT_MOVIE,
  movie,
});

export const actionMovieDetails = (
  movie: IMovie,
): IMovieAction => ({
  type: ActionTypes.MOVIE_DETAIL,
  movie,
});
