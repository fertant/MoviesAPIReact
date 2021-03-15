import React, { FunctionComponent } from 'react';

import CopyrightComponent from '../../atoms/Copyright/CopyrightComponent';
import { AddButton } from '../../atoms/Button/Button';
import SearchComponent from '../../molecules/Search/SearchComponent';
import { TopNavWrapper, HeaderBackground, HeaderWrapper, HeaderElementsWrapper } from './HeaderElements';

const HeaderComponent: FunctionComponent = () => (
  <HeaderWrapper>
    <HeaderBackground/>
    <HeaderElementsWrapper>
      <TopNavWrapper>
        <CopyrightComponent/>
        <AddButton>
            <i>+</i> Add Movie
        </AddButton>
      </TopNavWrapper>
      <SearchComponent placeholder={'What do you want to watch?'}/>
    </HeaderElementsWrapper>
  </HeaderWrapper>
);

export default HeaderComponent;
