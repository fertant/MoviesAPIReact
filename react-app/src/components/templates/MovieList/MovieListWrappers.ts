import styled from 'styled-components';

import { ITheme } from '../../theme/ITheme';

export const MainWrapper = styled.div`
  background-color: #232323;
  padding: 0 3em;
`;

export const MovieCountWrapper = styled.div`
  padding: 20px 0;
`;

export const NoMovieFound = styled.div`
  color: ${(props: ITheme) => props.theme.color_e};
  font-size: 40px;
  font-weight: 100;
  padding: 200px 0;
  text-align: center;
`;

export default MainWrapper;
