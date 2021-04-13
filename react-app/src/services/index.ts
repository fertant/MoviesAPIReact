import axios from 'axios';

import { IMovieApi } from './IModel';
import { IMovie } from '../components/molecules/MovieCard/IMovie';
import { IFilter } from '../reducers/IState';

const baseUrl = 'http://localhost:4000/';

export const mapMovies = (movies: Array<IMovieApi>) => (
  movies.map((movie: IMovieApi) => ({
    id: movie.id,
    title: movie.title,
    subtitle: movie.tagline,
    description: movie.overview,
    rate: movie.vote_average,
    duration: movie.runtime,
    img: movie.poster_path,
    yearOfRelease: movie.release_date,
    genre: movie.genres,
  }))
);

export function getMovies(filters: IFilter) {
  const query = [];
  query.push('search='.concat(filters.movieQuery));
  query.push('searchBy=title');
  if (filters.movieType !== 'All') {
    query.push('filter='.concat(filters.movieType));
  }
  const sort = filters.movieSort === 'yearOfRelease' ? 'release_date' : filters.movieSort;
  query.push('sortBy='.concat(sort));
  query.push('sortOrder=desc');
  query.push('offset=0');
  query.push('limit=10');
  return axios.get(`${baseUrl}movies?${query.join('&')}`)
    .then((response) => ({ response: mapMovies(response.data.data) }))
    .catch((error) => ({ error }));
}

export function getMovieDetail(movieId: string) {
  return axios.get(`${baseUrl}movies/${movieId}`)
    .then((response) => ({
      response: {
        id: response.data.id,
        title: response.data.title,
        subtitle: response.data.tagline,
        description: response.data.overview,
        rate: response.data.vote_average,
        duration: response.data.runtime,
        img: response.data.poster_path,
        yearOfRelease: response.data.release_date,
        genre: response.data.genres,
      },
    }))
    .catch((error) => ({ error }));
}

export function createMovieRequest(movie: IMovie) {
  const movieRequest = {
    title: movie.title,
    tagline: movie.subtitle,
    overview: movie.description,
    vote_average: movie.rate,
    runtime: movie.duration,
    poster_path: movie.img,
    release_date: movie.yearOfRelease,
    genres: movie.genre,
  };
  console.log(JSON.stringify(movieRequest));
  return axios.post(`${baseUrl}movies`, movieRequest)
    .then((response) => ({ response: response.data }))
    .catch((error) => ({ error }));
}

export function updateMovieRequest(movie: IMovie) {
  const movieRequest = {
    id: movie.id,
    title: movie.title,
    tagline: movie.subtitle ? movie.subtitle : movie.title,
    overview: movie.description ? movie.description : movie.title,
    vote_average: movie.rate,
    runtime: movie.duration,
    poster_path: movie.img,
    release_date: movie.yearOfRelease,
    genres: movie.genre,
  };
  return axios.put(`${baseUrl}movies`, movieRequest)
    .then((response) => ({ response: response.data }))
    .catch((error) => ({ error }));
}

export function deleteMovieRequest(movieId: string) {
  console.log(movieId);
  return axios.delete(`${baseUrl}movies/${movieId}`)
    .then((response) => ({ response: response.data }))
    .catch((error) => ({ error }));
}

export default getMovies;
