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
import { IHeader } from './IHeader';
import MemoMovieDetailsComponent from '../../molecules/MovieDetails/MovieDetailsComponent';
import img from '../../../../images/bg_header.jpg';

const HeaderComponent: FunctionComponent<IHeader> = ({ search }) => {
  const dispatch = useDispatch();
  const onAddMovie = () => {
    dispatch(actionControlVisibility('add', true));
  };

  return (
    <HeaderWrapper>
      <HeaderBackground>
        <img src={img} alt="header background" />
        <HeaderElementsWrapper>
          <TopNavWrapper>
            <CopyrightComponent />
            <BlackButton className="add-movie-button" onClick={onAddMovie}>
              <span>+ Add Movie</span>
            </BlackButton>
          </TopNavWrapper>
          <SearchComponent placeholder="What do you want to watch?" value={search} />
        </HeaderElementsWrapper>
      </HeaderBackground>
      <MemoMovieDetailsComponent />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
