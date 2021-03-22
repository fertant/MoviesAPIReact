import React, { FunctionComponent } from 'react';

import CopyrightComponent from '../../atoms/Copyright/CopyrightComponent';
import { BlackButton } from '../../atoms/Button/Button';
import SearchComponent from '../../molecules/Search/SearchComponent';
import { useDispatch } from '../../../hooks/CustomHooks';
import { actionControlVisibility } from '../../../context/AppContext';
import {
  TopNavWrapper,
  HeaderBackground,
  HeaderWrapper,
  HeaderElementsWrapper,
} from './HeaderElements';

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
  </HeaderWrapper>
  );
};

export default HeaderComponent;
