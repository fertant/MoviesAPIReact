/* eslint-disable max-len */
import expect from 'expect';

import * as reducers from '../../../reducers/Reducers';
import * as actions from '../../../actions/Actions';
import { IMovie } from '../../../components/molecules/MovieCard/IMovie';

const movieObj: IMovie = {
  id: 1,
  title: 'Moana',
  subtitle: 'Moana',
  description: 'description',
  rate: 5,
  duration: 30,
  yearOfRelease: '2020',
  genre: ['Horror'],
};

describe('post reducer', () => {
  it('should return the MODAL_VISIBILITY state', () => {
    expect(reducers.modals(reducers.modalsState, actions.actionControlVisibility('add', true))).toEqual({ ...reducers.modalsState, add: true });
    expect(reducers.modals(reducers.modalsState, { type: 'EMPTY', modalType: 'add', visibility: true })).toEqual({ ...reducers.modalsState });
  });

  it('should return the SET_FILTER state', () => {
    expect(reducers.filters(reducers.filtersState, actions.actionSetFilter('movieType', 'Horror'))).toEqual({ ...reducers.filtersState, movieType: 'Horror' });
    expect(reducers.filters(reducers.filtersState, { type: 'EMPTY', filterType: 'movieType', filterSetting: '' })).toEqual({ ...reducers.filtersState });
  });

  it('should return the SET_MOVIES state', () => {
    expect(reducers.moviesList(reducers.moviesState, actions.actionSetMovies([movieObj]))).toEqual({ moviesList: [movieObj] });
    expect(reducers.moviesList(reducers.moviesState, { type: 'EMPTY', movies: [movieObj] })).toEqual({ ...reducers.moviesState });
  });

  it('should return the SELECT_MOVIE state', () => {
    expect(reducers.selectedMovie(reducers.selectedMovieState, actions.actionSelectMovie(movieObj))).toEqual({ ...reducers.selectedMovieState, selectedMovie: movieObj, selectedMovieId: 1 });
    expect(reducers.selectedMovie(reducers.selectedMovieState, actions.actionSelectMovieId(2))).toEqual({ ...reducers.selectedMovieState, selectedMovieId: 2 });
    expect(reducers.selectedMovie(reducers.selectedMovieState, { type: 'EMPTY', movie: movieObj })).toEqual({ ...reducers.selectedMovieState });
  });

  it('should return the MOVIE ACTION state', () => {
    expect(reducers.movieAction(reducers.movieActionState, actions.actionUpdateMovie(movieObj))).toEqual({ ...reducers.movieActionState, movieObject: movieObj });
    expect(reducers.movieAction(reducers.movieActionState, { type: 'EMPTY', movie: movieObj })).toEqual({ ...reducers.movieActionState });
  });

  it('should return the MOVIE_DETAIL state', () => {
    expect(reducers.movieDetail(reducers.movieDetailState, actions.actionMovieDetails(movieObj))).toEqual({ ...reducers.movieDetailState, movieDetail: movieObj });
    expect(reducers.movieDetail(reducers.movieDetailState, { type: 'EMPTY', movie: movieObj })).toEqual({ ...reducers.movieDetailState });
  });

  it('should return the REQUEST ACTION state', () => {
    expect(reducers.requestApi(reducers.requestState, actions.actionApiResponseSuccessful('success'))).toEqual({ ...reducers.requestState, isLoading: false, status: 'success' });
    expect(reducers.requestApi(reducers.requestState, actions.actionApiResponseFault('error'))).toEqual({ ...reducers.requestState, isLoading: false, error: 'error' });
    expect(reducers.requestApi(reducers.requestState, actions.actionApiFilterRequest())).toEqual({ ...reducers.requestState, isLoading: true });
    expect(reducers.requestApi(reducers.requestState, { type: 'EMPTY' })).toEqual({ ...reducers.requestState });
  });
});
