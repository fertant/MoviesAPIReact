import { combineReducers } from 'redux';

import {
  IControlAction,
  IFilterAction,
  IMovieListAction,
  IRequestAction,
  IMovieAction,
} from '../actions/IActions';
import { ActionTypes } from '../actions/Actions';
import {
  IFilter,
  IModal,
  IRequestProcess,
  IMoviesList,
  ISelectedMovie,
  IMovieActionState,
  IMovieDetail,
} from './IState';

export const filtersState = {
  movieType: 'All',
  movieQuery: '',
  movieSort: 'yearOfRelease',
};

export const modalsState = {
  add: false,
  edit: false,
  delete: false,
  details: false,
  alert: false,
};

export const requestState = {
  isLoading: true,
};

export const moviesState = {
  moviesList: [],
};

export const selectedMovieState = {
  selectedMovie: null,
  selectedMovieDetail: 0,
};

export const movieDetailState = {
  movieDetail: null,
};

export const movieActionState = {
  movieObject: null,
};

export const modals = (state: IModal = modalsState, action: IControlAction) => {
  switch (action.type) {
    case ActionTypes.MODAL_VISIBILITY: {
      const { modalType, visibility } = action;
      return { ...state, [modalType]: visibility };
    }
    default:
      return state;
  }
};

export const filters = (state: IFilter = filtersState, action: IFilterAction) => {
  switch (action.type) {
    case ActionTypes.SET_FILTER: {
      const { filterType, filterSetting } = action;
      return { ...state, [filterType]: filterSetting };
    }
    default:
      return state;
  }
};

export const requestApi = (state: IRequestProcess = requestState, action: IRequestAction) => {
  switch (action.type) {
    case ActionTypes.START_FILTER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ActionTypes.REQUEST_SUCCESSFUL: {
      return { ...state, isLoading: false, status: action.message };
    }
    case ActionTypes.REQUEST_FAULT: {
      return { ...state, isLoading: false, error: action.message };
    }
    default:
      return state;
  }
};

export const moviesList = (state: IMoviesList = moviesState, action: IMovieListAction) => {
  switch (action.type) {
    case ActionTypes.SET_MOVIES: {
      const { movies } = action;
      return { ...state, moviesList: movies };
    }
    default:
      return state;
  }
};

export const selectedMovie = (state: ISelectedMovie = selectedMovieState, action: IMovieAction) => {
  switch (action.type) {
    case ActionTypes.SELECT_MOVIE: {
      const { movie } = action;
      return movie ? { ...state, selectedMovie: movie, selectedMovieId: movie.id } : { ...state };
    }
    case ActionTypes.SELECT_MOVIE_ID: {
      const { id } = action;
      return { ...state, selectedMovieId: id };
    }
    default:
      return state;
  }
};

export const movieDetail = (state: IMovieDetail = movieDetailState, action: IMovieAction) => {
  switch (action.type) {
    case ActionTypes.MOVIE_DETAIL: {
      const { movie } = action;
      return { ...state, movieDetail: movie };
    }
    default:
      return state;
  }
};

export const movieAction = (state: IMovieActionState = movieActionState, action: IMovieAction) => {
  switch (action.type) {
    case ActionTypes.CREATE_MOVIE:
    case ActionTypes.EDIT_MOVIE:
    case ActionTypes.DELETE_MOVIE: {
      const { movie } = action;
      return { ...state, movieObject: movie };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  modals,
  filters,
  moviesList,
  requestApi,
  selectedMovie,
  movieDetail,
  movieAction,
});

export default rootReducer;
