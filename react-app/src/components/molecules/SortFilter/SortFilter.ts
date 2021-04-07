import styled from 'styled-components';

import { IElementStatusProps } from './ISortFilter';

export const SelectWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  gap: 1.5em;
  position: relative;
  cursor: pointer;

  label {
    color: ${props => props.theme.color_d};
  }
  
  .selector-caret {
    color: ${props => props.theme.color_a};
  }
`;

export const SelectedOption = styled.div`
  width: 150px;
`;

export const SelectListWrapper = styled.ul`
  display: ${(props: IElementStatusProps) => props.status ? 'block' : 'none'};
  background: ${props => props.theme.color_d};
  border-radius: 3px;
  list-style: none;
  left: 80px;
  padding: 10px;
  position: absolute;
  top: 25px;
  width: 180px;
`;

export const SelectListItem = styled.li`
  padding: 3px;
  
  &:hover {
    background: ${props => props.theme.color_b};
  }
`;

export default SelectListWrapper;
