import styled from 'styled-components';

export const CopyrightWrapper = styled.div`
  font-size: 20px;
  padding-left: 20px;
  a {
    color: ${props => props.theme.color_a};
    text-decoration: none;
  }
`;

export default CopyrightWrapper;
