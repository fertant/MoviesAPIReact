import React, { FunctionComponent } from 'react';

import { SearchButton } from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import { SearchWrapper, SearchTitle, SearchFieldWrapper } from './SearchElements';
import { ISearch } from './ISearch';

const SearchComponent: FunctionComponent<ISearch> = ({ placeholder }) => {
  return (
    <SearchWrapper>
      <SearchTitle>Find your movie</SearchTitle>
        <form>
          <SearchFieldWrapper>
            <Input placeholder={placeholder}/>
            <SearchButton type={'submit'}>Search</SearchButton>
          </SearchFieldWrapper>
        </form>
    </SearchWrapper>
  );
}

export default SearchComponent;
