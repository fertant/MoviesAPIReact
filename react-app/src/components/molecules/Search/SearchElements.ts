import styled from 'styled-components';

import { ITheme } from '../../theme/ITheme';

export const SearchWrapper = styled.div`
  padding: 6% 10%;
`;

export const SearchTitle = styled.h1`
  color: ${(props: ITheme) => props.theme.color_e};
  font-size: 30px;
  font-weight: 100;
  text-transform: uppercase;
`;

export const SearchFieldWrapper = styled.div`
  display: flex;
  gap: 0.35em;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default SearchWrapper;
