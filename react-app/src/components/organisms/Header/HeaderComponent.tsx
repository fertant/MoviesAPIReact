import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import CopyrightComponent from '../../atoms/Copyright/CopyrightComponent';
import { BlackButton } from '../../atoms/Button/Button';
import SearchComponent from '../../molecules/Search/SearchComponent';
import { actionControlVisibility } from '../../../actions/Actions';
import {
  TopNavWrapper,
  HeaderBackground,
  HeaderWrapper,
  HeaderElementsWrapper,
} from './HeaderElements';
import MemoMovieDetailsComponent from '../../molecules/MovieDetails/MovieDetailsComponent';

const HeaderComponent: FunctionComponent = () => {
  const dispatch = useDispatch();
  const onAddMovie = () => {
    dispatch(actionControlVisibility('add', true));
  };

  return (
    <HeaderWrapper>
      <HeaderBackground />
      <HeaderElementsWrapper>
        <TopNavWrapper>
          <CopyrightComponent />
          <BlackButton onClick={onAddMovie}>
            <span>+ Add Movie</span>
          </BlackButton>
        </TopNavWrapper>
        <SearchComponent placeholder={'What do you want to watch?'}/>
      </HeaderElementsWrapper>
      <MemoMovieDetailsComponent />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
