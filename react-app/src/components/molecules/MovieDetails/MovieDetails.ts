import styled from 'styled-components';

import { ITheme } from '../../theme/ITheme';
import { IMovieScreenProps } from './IMovieDetails';

export const MovieScreen = styled.div`
  background: url(${(props: IMovieScreenProps) => props.screen}) 100% 100% no-repeat;
  background-size: contain;
  height: 31vw;
`;

export const MovieDetailScreen = styled(MovieScreen)`
  width: 22%;
  height: 350px;
  padding-left: 20px;
`;

export const MovieDetailsWrapper = styled.div`
  font-size: 20px;
  padding-left: 20px;
  a {
    color: ${(props: ITheme) => props.theme.color_a};
  }
  z-index: 9;
`;

export const MovieDetailsClosePanel = styled.div`
  color: ${(props: ITheme) => props.theme.color_a};
  text-align: right;
  padding: 10px 50px 10px;
  font-size: 20px;
`;

export const MovieDetailsCloseButton = styled.div`
  &:hover {
    cursor: pointer;
    color: ${(props: ITheme) => props.theme.color_e};
  }
`;

export const MovieContentWrapper = styled.div`
  display: flex;
`;

export const MovieContent = styled.div`
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  width: 70%;
`;

export const MovieTitle = styled.h1`
  color: ${(props: ITheme) => props.theme.color_e};
  font-weight: 100;
  font-size: 44px;
  margin: 0;
  padding: 20px 0;
`;

export const MovieSubTitle = styled.h2`
  color: ${(props: ITheme) => props.theme.color_e};
  font-weight: 100;
  font-size: 14px;
  margin: 0;
`;

export const MovieAttributes = styled.ul`
  color: ${(props: ITheme) => props.theme.color_a};
  list-style: none;
  margin: 0;
  padding: 20px 0;
`;

export const MovieDescription = styled.div`
  color: ${(props: ITheme) => props.theme.color_e};
  font-size: 14px;
`;

export const MovieAttributeItem = styled.li`
  float: left;
  padding-right: 20px;
`;

export const MovieRate = styled.span`
  color: green;
  border: 1px solid ${(props: ITheme) => props.theme.color_d};
  position: relative;
  font-size: 25px;
  bottom: 6px;
  border-radius: 30px;
  padding: 15px 10px;
  margin: 0 20px;
`;

export const HeaderMovieDetails = styled.div`
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 7;
  position: absolute;
`;
