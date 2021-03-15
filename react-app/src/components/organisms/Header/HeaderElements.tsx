import styled from 'styled-components';
import img from '../../../../images/bg_header.jpg';

export const TopNavWrapper = styled.div`
  display: flex;
  color: ${props => props.theme.color_a};
  justify-content: space-between;
  width: 100%;
`;

export const HeaderWrapper = styled.header`
  padding: 10px 20px;
  margin-bottom: 10px;
  height: 300px;
  position: relative;    
`;

export const HeaderElementsWrapper = styled.div`
    position: relative;
    z-index: 2;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  filter: blur(2px);
  background: url(${img}) no-repeat center ${props => props.theme.color_f};
  background-size: cover;
`;

export default HeaderBackground;
