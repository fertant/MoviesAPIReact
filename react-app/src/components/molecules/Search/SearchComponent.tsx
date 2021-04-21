import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SearchButton } from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import { SearchWrapper, SearchTitle, SearchFieldWrapper } from './SearchElements';
import { ISearch } from './ISearch';
import { actionSetFilter } from '../../../actions/Actions';

const SearchComponent: FunctionComponent<ISearch> = ({ placeholder, value }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onInput = (e: React.KeyboardEvent<Object>) => {
    const element = e.target as unknown as HTMLInputElement;
    setInput(element.value);
    if (e.key === '13') {
      dispatch(actionSetFilter('movieQuery', input));
      if (input === '') {
        history.push('/');
      } else {
        history.push(`/search/${input}`);
      }
    }
  };

  const onSearchSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(actionSetFilter('movieQuery', input));
    if (input === '') {
      history.push('/');
    } else {
      history.push(`/search/${input}`);
    }
  };

  return (
    <SearchWrapper>
      <SearchTitle>Find your movie</SearchTitle>
      <form onSubmit={onSearchSubmit}>
        <SearchFieldWrapper>
          <Input placeholder={placeholder} onKeyUp={onInput} defaultValue={value} />
          <SearchButton type="submit">Search</SearchButton>
        </SearchFieldWrapper>
      </form>
    </SearchWrapper>
  );
};

export default SearchComponent;
