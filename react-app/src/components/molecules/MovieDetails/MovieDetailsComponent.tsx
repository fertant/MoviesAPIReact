import React, { FunctionComponent, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  MovieDetailsWrapper,
  MovieDetailsClosePanel,
  MovieDetailsCloseButton,
  MovieContentWrapper,
  MovieDetailScreen,
  MovieContent,
  MovieTitle,
  MovieSubTitle,
  MovieAttributes,
  MovieAttributeItem,
  MovieDescription,
  MovieRate,
  HeaderMovieDetails,
} from './MovieDetails';
import { actionControlVisibility } from '../../../actions/Actions';
import { IMovie } from '../MovieCard/IMovie';
import { IState } from '../../../reducers/IState';

const MovieDetailsComponent: FunctionComponent = () => {
  const type = 'details';
  let visible = useSelector(({ modals: { [type]: visibility } }: IState) => visibility);
  const history = useHistory();
  // eslint-disable-next-line max-len
  const movieDetails: IMovie = useSelector(({ movieDetail: { movieDetail: movie } }: IState) => movie);
  visible = movieDetails ? visible : false;
  const dispatch = useDispatch();
  const onClose = () => {
    history.push('/');
    dispatch(actionControlVisibility(type, false));
  };

  return !!visible && (
    <HeaderMovieDetails>
      <MovieDetailsWrapper>
        <MovieDetailsClosePanel>
          <MovieDetailsCloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faSearch} />
          </MovieDetailsCloseButton>
        </MovieDetailsClosePanel>
        <MovieContentWrapper>
          <MovieDetailScreen screen={movieDetails.img} />
          <MovieContent>
            <MovieTitle>
              {movieDetails.title}
              <MovieRate>{movieDetails.rate}</MovieRate>
            </MovieTitle>
            <MovieSubTitle>{movieDetails.subtitle}</MovieSubTitle>
            <MovieAttributes>
              <MovieAttributeItem>{movieDetails.yearOfRelease}</MovieAttributeItem>
              <MovieAttributeItem>
                {movieDetails.duration}
                min
              </MovieAttributeItem>
            </MovieAttributes>
            <MovieDescription>{movieDetails.description}</MovieDescription>
          </MovieContent>
        </MovieContentWrapper>
      </MovieDetailsWrapper>
    </HeaderMovieDetails>
  );
};

const MemoMovieDetailsComponent = React.memo(MovieDetailsComponent)

export default MemoMovieDetailsComponent;
