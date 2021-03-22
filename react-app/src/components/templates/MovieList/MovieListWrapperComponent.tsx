import React, { FunctionComponent, useEffect, useState } from 'react';

import { IMovie } from '../../molecules/MovieCard/IMovie';
import { IMenuItem } from '../../molecules/Navigation/INavigation';
import NavigationComponent from '../../molecules/Navigation/NavigationComponent';
import MovieListComponent from '../../organisms/MovieList/MovieListComponent';
import { MainWrapper, MovieCountWrapper } from './MovieListWrappers';
import { useSelector } from '../../../hooks/CustomHooks';

const filters: Array<IMenuItem> = [
  { title: 'All' },
  { title: 'Documentary' },
  { title: 'Comedy' },
  { title: 'Horror' },
  { title: 'Crime' },
  { title: 'Action & Adventure' },
];

const movies: IMovie = [
  {
    id: 1,
    title: 'Мій рік у Нью-Йорку',
    yearOfRelease: 2020,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGLHzIcJmxOaJjdGJ0XbqsALJk1YeIi7qZXC7Z6jEagt0Hbi0M',
    genre: ['Action & Adventure', 'Comedy']
  },
  {
    id: 2,
    title: 'Небезпечний елемент',
    yearOfRelease: 2019,
    img: 'https://kinoafisha.ua/upload/2021/01/films/9412/w182x2_221j55hmopasni-element.webp',
    genre: ['Crime', 'Documentary']
  },
  {
    id: 3,
    title: 'Почесна місія: Герої назавжди',
    yearOfRelease: 2018,
    img: 'https://kinoafisha.ua/upload/2020/12/films/9407/w182x2_220eucpgpocsetnaya-missiya-geroi-navsegda.webp',
    genre: ['Horror', 'Crime']
  },
  {
    id: 4,
    title: 'Аферистка',
    yearOfRelease: 2020,
    img: 'https://kinoafisha.ua/upload/2020/09/films/9301/w182x2_22293iqfmne-ne-vse-ravno.webp',
    genre: ['Action & Adventure', 'Comedy']
  },
];

const MovieListWrapperComponent: FunctionComponent = () => {
  const [filteredMovies, setFilterMovies] = useState(movies);
  const query = useSelector(({ ['movieQuery']: type }) => type);
  const type = useSelector(({ ['movieType']: type }) => type);
  const sort = useSelector(({ ['movieSort']: sort }) => sort);

  useEffect(() => {
		const filteredMovies = movies
      .filter((movie: IMovie) => {
        if (query.length === 0) return 1;
        return movie.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) >= 0;
      })
      .filter((movie: IMovie) => {
        if (type.toLowerCase() === 'all') {
          return movie;
        } else {
          return movie.genre.includes(type);
        }
      })
			.sort((a: IMovie, b: IMovie) => {
				if (
					typeof a[sort] === 'string' &&
					typeof b[sort] === 'string'
				) {
					return a[sort].toUpperCase().localeCompare(b[sort].toUpperCase());
				} else {
					return a[sort] > b[sort];
				}
        return 0;
			});

    setFilterMovies(filteredMovies);
	}, [type, sort, query]);


  return (
    <MainWrapper>
      <NavigationComponent filters={filters} />
      <MovieCountWrapper>
        <strong>{filteredMovies.length}</strong>
        &nbsp;
        movies found
      </MovieCountWrapper>
      <MovieListComponent items={filteredMovies} />
    </MainWrapper>
  );
}

export default MovieListWrapperComponent;
