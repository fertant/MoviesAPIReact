import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px;
  background-color: ${props => props.theme.color_a};
  color: ${props => props.theme.color_e};

  font-size: 20px;
  text-transform: uppercase;
  
  &:hover {
      cursor: pointer;
  }
  
  &:focus {
      outline-width: 0;
  }
`;

export const SearchButton = styled(Button)`
  flex: 1 1 100px;
  min-width: 120px;
`;

export const BlackButton = styled(Button)`
  color: ${props => props.theme.color_a};
  background-color: ${props => props.theme.color_d};
  font-weight: 600;
  opacity: 0.7;
  
  &:hover {
      cursor: pointer;
      opacity: 0.95;
  }
`;

export const BlackButtonWithBorder = styled(BlackButton)`
  border: 1px solid ${props => props.theme.color_a};
`;

export default Button;
