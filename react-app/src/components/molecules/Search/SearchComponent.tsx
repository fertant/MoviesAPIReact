import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchButton } from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import { SearchWrapper, SearchTitle, SearchFieldWrapper } from './SearchElements';
import { ISearch } from './ISearch';
import { actionSetFilter } from '../../../actions/Actions';

const SearchComponent: FunctionComponent<ISearch> = ({ placeholder }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onInput = (e: React.SyntheticEvent) => {
    setInput(e.target.value);
    if (e.keyCode === '13') {
      dispatch(actionSetFilter('movieQuery', input));
    }
  };

  const onSearchSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(actionSetFilter('movieQuery', input));
  };

  return (
    <SearchWrapper>
      <SearchTitle>Find your movie</SearchTitle>
        <form onSubmit={onSearchSubmit}>
          <SearchFieldWrapper>
            <Input placeholder={placeholder} onKeyUp={onInput}/>
            <SearchButton type={'submit'}>Search</SearchButton>
          </SearchFieldWrapper>
        </form>
    </SearchWrapper>
  );
};

export default SearchComponent;
