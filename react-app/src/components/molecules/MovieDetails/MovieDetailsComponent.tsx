import React, { FunctionComponent, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
import { MovieContext } from '../../../context/MovieContext';
import { useSelector, useDispatch } from '../../../hooks/CustomHooks';
import { actionControlVisibility } from '../../../context/AppContext';

const MovieDetailsComponent: FunctionComponent = () => {
  const { movieDetails } = useContext(MovieContext);
  const type = 'details';
  const visible = useSelector(({ [type]: visibility }) => visibility);
  const dispatch = useDispatch();
  const onClose = () => dispatch(actionControlVisibility(type, false));

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
