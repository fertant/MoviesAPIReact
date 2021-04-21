import styled from 'styled-components';

import { ITheme } from '../../theme/ITheme';

export const TopNavWrapper = styled.div`
  display: flex;
  color: ${(props: ITheme) => props.theme.color_a};
  justify-content: space-between;
  width: 100%;
`;

export const HeaderWrapper = styled.header`
  height: 400px;
  position: relative;    
`;

export const HeaderElementsWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
`;

export const HeaderBackground = styled.div`
  img {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-height: 400px;
    filter: blur(2px);
  }
`;

export default HeaderBackground;
