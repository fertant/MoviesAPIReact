import { createSelector } from 'reselect';

import { IState } from '../reducers/IState';

const filtersState = (state: IState) => state.filters;
const movieDetailState = (state: IState) => state.movieDetail;
const moviesListState = (state: IState) => state.moviesList;
const requestApiState = (state: IState) => state.requestApi;

export const moviesListSelector = createSelector(
  moviesListState,
  ({ moviesList: filteredMovies }) => filteredMovies,
);
export const movieDetailsSelector = createSelector(
  movieDetailState,
  ({ movieDetail: movie }) => movie,
);
export const requestSelector = createSelector(
  requestApiState,
  ({ isLoading: loading }) => loading,
);
export const querySelector = createSelector(
  filtersState,
  ({ movieQuery: queryValue }) => queryValue,
);
export const typeSelector = createSelector(
  filtersState,
  ({ movieType: typeValue }) => typeValue,
);
export const sortSelector = createSelector(
  filtersState,
  ({ movieSort: sortValue }) => sortValue,
);
