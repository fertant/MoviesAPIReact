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

const filtersState = {
  movieType: 'All',
  movieQuery: '',
  movieSort: 'yearOfRelease',
};

const modalsState = {
  add: false,
  edit: false,
  delete: false,
  details: false,
  alert: false,
};

const requestState = {
  isLoading: true,
};

const moviesState = {
  moviesList: [],
};

const selectedMovieState = {
  selectedMovie: null,
};

const movieDetailState = {
  movieDetail: null,
};

const movieActionState = {
  movieObject: null,
};

const modals = (state: IModal = modalsState, action: IControlAction) => {
  switch (action.type) {
    case ActionTypes.MODAL_VISIBILITY: {
      const { modalType, visibility } = action;
      return { ...state, [modalType]: visibility };
    }
    default:
      return state;
  }
};

const filters = (state: IFilter = filtersState, action: IFilterAction) => {
  switch (action.type) {
    case ActionTypes.SET_FILTER: {
      const { filterType, filterSetting } = action;
      return { ...state, [filterType]: filterSetting };
    }
    default:
      return state;
  }
};

const requestApi = (state: IRequestProcess = requestState, action: IRequestAction) => {
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

const moviesList = (state: IMoviesList = moviesState, action: IMovieListAction) => {
  switch (action.type) {
    case ActionTypes.SET_MOVIES: {
      const { movies } = action;
      return { ...state, moviesList: movies };
    }
    default:
      return state;
  }
};

const selectedMovie = (state: ISelectedMovie = selectedMovieState, action: IMovieAction) => {
  switch (action.type) {
    case ActionTypes.SELECT_MOVIE: {
      const { movie } = action;
      return { ...state, selectedMovie: movie };
    }
    default:
      return state;
  }
};
const movieDetail = (state: IMovieDetail = movieDetailState, action: IMovieAction) => {
  switch (action.type) {
    case ActionTypes.MOVIE_DETAIL: {
      const { movie } = action;
      return { ...state, movieDetail: movie };
    }
    default:
      return state;
  }
};

const movieAction = (state: IMovieActionState = movieActionState, action: IMovieAction) => {
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

const rootReducer = combineReducers({
  modals,
  filters,
  moviesList,
  requestApi,
  selectedMovie,
  movieDetail,
  movieAction,
});

export default rootReducer;
