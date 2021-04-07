import styled from 'styled-components';

import { IThemeProps } from './INavigation';

export const MainNavbarWrapper = styled.nav`
  color: ${props => props.theme.color_e};
  position: relative;
`;

export const ListWrapper = styled.ul`
    display: flex;
    list-style: none;
    padding: 15px 0 0;
    margin: 0;
`;
export const ListItem = styled.li`
  padding: 0 10px 0 0;
  border-bottom: ${(props: IThemeProps) => props.active ? '3px solid ' + props.theme.color_g : 'none'};
  
  &:hover {
    cursor: pointer;
  }
`;

export const SeparatedLine = styled.div`
    border-bottom: 3px ${props => props.theme.color_d} solid;
    position: absolute;
    width: 100%;
    z-index: 0;
`;

export const ManagePanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-transform: uppercase;
  z-index: 1;
  top: 3px;
  position: relative;
`;

export default MainNavbarWrapper;
