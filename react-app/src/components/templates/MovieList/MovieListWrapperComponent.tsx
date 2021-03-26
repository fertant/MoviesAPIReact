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

export const movies: Array<IMovie> = [
  {
    id: 1,
    title: 'Мій рік у Нью-Йорку',
    subtitle: 'Oscar winning Movie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae, blanditiis eos est facilis ipsa laborum libero minima, minus, perferendis quis sint vitae voluptatum. Exercitationem quam quo repellendus sapiente sit.',
    yearOfRelease: 2020,
    duration: 170,
    rate: 4.6,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGLHzIcJmxOaJjdGJ0XbqsALJk1YeIi7qZXC7Z6jEagt0Hbi0M',
    genre: ['Action & Adventure', 'Comedy'],
  },
  {
    id: 2,
    title: 'Небезпечний елемент',
    subtitle: 'Grammy winning Movie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam at beatae dolores eos error esse hic id illo ipsa libero nulla odit optio quo sed similique sunt, totam!',
    yearOfRelease: 2019,
    duration: 140,
    rate: 7.4,
    img: 'https://kinoafisha.ua/upload/2021/01/films/9412/w182x2_221j55hmopasni-element.webp',
    genre: ['Crime', 'Documentary'],
  },
  {
    id: 3,
    title: 'Почесна місія: Герої назавжди',
    subtitle: 'Viewer winning Movie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, illum quis. Aliquam at dolore eius exercitationem impedit obcaecati reiciendis. A aliquid atque dolorem, et eum harum quae quisquam saepe sunt.',
    yearOfRelease: 2018,
    duration: 90,
    rate: 8.6,
    img: 'https://kinoafisha.ua/upload/2020/12/films/9407/w182x2_220eucpgpocsetnaya-missiya-geroi-navsegda.webp',
    genre: ['Horror', 'Crime'],
  },
  {
    id: 4,
    title: 'Аферистка',
    subtitle: 'The best film ever',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi dignissimos dolores eaque eos est harum iusto minima numquam perspiciatis quaerat, quis quod repellendus saepe suscipit ullam voluptas voluptate.',
    yearOfRelease: 2020,
    duration: 116,
    rate: 3.9,
    img: 'https://kinoafisha.ua/upload/2020/09/films/9301/w182x2_22293iqfmne-ne-vse-ravno.webp',
    genre: ['Action & Adventure', 'Comedy'],
  },
];

const MovieListWrapperComponent: FunctionComponent = () => {
  const [filteredMovies, setFilterMovies] = useState(movies);
  const query = useSelector(({ ['movieQuery']: type }) => type);
  const type = useSelector(({ ['movieType']: type }) => type);
  const sort = useSelector(({ ['movieSort']: sort }) => sort);

  useEffect(() => {
    const moviesList = movies
      .filter((movie: IMovie) => {
        if (query.length === 0) return 1;
        return movie.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) >= 0;
      })
      .filter((movie: IMovie) => {
        if (type.toLowerCase() === 'all') {
          return movie;
        }
        return movie.genre.includes(type);
      })
      .sort((a: IMovie, b: IMovie) => {
        if (
          typeof a[sort] === 'string' &&
          typeof b[sort] === 'string'
        ) {
          return a[sort].toUpperCase().localeCompare(b[sort].toUpperCase());
        }
        return a[sort] > b[sort];
      });

    setFilterMovies(moviesList);
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
};

export default MovieListWrapperComponent;
