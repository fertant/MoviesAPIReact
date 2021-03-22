import styled from 'styled-components';

import { IMovieEditState } from './IMovie';

export const MovieItemWrapper = styled.div`
  position: relative;
  color: ${props => props.theme.color_d};;
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1024px) {
    width: 28%;
  }
`;

export const MovieTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const MovieTitle = styled.h1`
  font-size: 18px;
  font-weight: 200;
  margin: auto 0;
`;

export const MovieYear = styled.div`
  border: 1px ${props => props.theme.color_d} solid;
  border-radius: 3px;
  padding: 2px 0;
  margin: 5px;
  text-align: center;
  width: 70px;
`;

export const MovieScreen = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const MovieGenre = styled.div`
  font-size: 14px;
`;

export const EditIcon = styled.div`
  position: absolute;
  background-color: ${props => props.theme.color_c};
  border-radius: 18px;
  font-size: 0;
  padding: 18px;
  top: 10px;
  right: 10px;
`;

export const ThreeDots = styled.span`
  position: relative;
  background-color: ${props => props.theme.color_e};
  border-radius: 2px;
  font-size: 0;
  padding: 2px;

  &:before {
    position: absolute;
    left: 0px;
    top: -8px;
    content: '';

    background-color: ${props => props.theme.color_e};
    border-radius: 2px;
    font-size: 0;
    padding: 2px;
  }

  &:after {
    position: absolute;
    left: 0;
    top: 8px;
    content: '';

    background-color: ${props => props.theme.color_e};
    border-radius: 2px;
    font-size: 0;    
    padding: 2px;
  }
`;

export const EditMenuItem = styled.button`
  width: 100%;
  padding: 5px 25px;
  margin: 5px 0;
  background: ${props => props.theme.color_c};
  text-align: start;
  border: none;
  font-size: 18px;
  color: ${props => props.theme.color_e};

  &:hover {
    background-color: ${props => props.theme.color_a};
    color: ${props => props.theme.color_e};
  }
`;

export const EditMenu = styled.div`
  display: ${(props: IMovieEditState) => props.editOpened ? 'inline-block' : 'none'};
  position: absolute;
  width: 210px;
  padding: 30px 0 20px;
  background-color: ${props => props.theme.color_c};
  border-radius: 2px;
  top: 10px;
  right: 10px;
`;

export const CloseIcon = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  opacity: 0.3;
  border: none;
  background-color: ${props => props.theme.color_c};

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    top: 0;
    content: ' ';
    height: 15px;
    width: 2px;
    background-color: ${props => props.theme.color_e};
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;  
  
export default MovieItemWrapper;
