import {
  takeLatest,
  delay,
  put,
  call,
  fork,
  select,
} from 'redux-saga/effects';

import * as actions from '../actions/Actions';
import {
  getMovies,
  getMovieDetail,
  createMovieRequest,
  updateMovieRequest,
  deleteMovieRequest,
} from '../services';

export function* fetchMovies() {
  const filters = yield select((state) => (state.filters));
  const { response, error } = yield call(getMovies, filters);
  if (error) put(actions.actionApiResponseFault(error));
  yield put(actions.actionSetMovies(response));
  yield put(actions.actionApiResponseSuccessful('Fetch movies list completed.'));
}

export function* fetchMovieDetail() {
  const id = yield select((state) => (state.selectedMovie.selectedMovieId));
  const { response, error } = yield call(getMovieDetail, id);
  if (error) put(actions.actionApiResponseFault(error));
  yield put(actions.actionMovieDetails(response));
}

export function* createMovie() {
  const movie = yield select((state) => (state.movieAction.movieObject));
  const { error } = yield call(createMovieRequest, movie);
  if (error) put(actions.actionApiResponseFault(error));
  yield put(actions.actionApiResponseSuccessful(`New movie creates with title: ${movie.title}`));
  yield put(actions.actionControlVisibility('alert', true));
  yield put(actions.actionControlVisibility('alert', false));
  yield put(actions.actionApiFilterRequest());
}

export function* updateMovie() {
  const movie = yield select((state) => (state.movieAction.movieObject));
  const { error } = yield call(updateMovieRequest, movie);
  if (error) put(actions.actionApiResponseFault(error));
  yield put(actions.actionApiResponseSuccessful(`Movie ${movie.id} updated.`));
  yield put(actions.actionControlVisibility('alert', true));
  yield put(actions.actionControlVisibility('alert', false));
  yield put(actions.actionApiFilterRequest());
}

export function* deleteMovie() {
  const movie = yield select((state) => (state.movieAction.movieObject));
  const { error } = yield call(deleteMovieRequest, movie.id.toString());
  if (error) put(actions.actionApiResponseFault(error));
  put(actions.actionApiResponseSuccessful(`Movie ${movie.id} deleted.`));
  yield put(actions.actionControlVisibility('alert', true));
  yield put(actions.actionControlVisibility('alert', false));
  yield put(actions.actionApiFilterRequest());
}

export function* editMovie() {
  yield takeLatest(actions.ActionTypes.CREATE_MOVIE, createMovie);
  yield takeLatest(actions.ActionTypes.EDIT_MOVIE, updateMovie);
  yield takeLatest(actions.ActionTypes.DELETE_MOVIE, deleteMovie);
}

export function* movieDetail() {
  yield takeLatest(actions.ActionTypes.SELECT_MOVIE, fetchMovieDetail);
  yield takeLatest(actions.ActionTypes.SELECT_MOVIE_ID, fetchMovieDetail);
}

export function* filterMovies() {
  yield takeLatest(actions.ActionTypes.START_FILTER_REQUEST, fetchMovies);
}

export function* startup() {
  const moviesList = yield select((state) => (state.moviesList));
  if (moviesList.length === 0) yield fork(fetchMovies);
}

export default function* root() {
  yield fork(startup);
  yield fork(filterMovies);
  yield fork(movieDetail);
  yield fork(editMovie);
}
