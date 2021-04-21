import styled from 'styled-components';

import { ITheme } from '../../theme/ITheme';

export const NotFoundWrapper = styled.div`
  height: 60%;
  position: relative;
  margin-top: 40px;
  background-color: ${(props: ITheme) => props.theme.color_f};
`;

export const NotFoundBackground = styled.div`
  img {
    height: 100%;
    width: 35%;
    min-width: 320px;
    max-height: 460px;
    margin: auto;
    display: block;
  }
`;

export const BackWrapper = styled.div`
  height: calc(40% - 224px);
  min-height: 100px;
  width: 100%;
  position: relative;
  padding: 40px 0;

  >button {
    display: block;
    margin: 0 auto;
  }
`;

export default NotFoundBackground;
