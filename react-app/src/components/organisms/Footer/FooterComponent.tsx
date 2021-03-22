import React, { FunctionComponent } from 'react';

import FooterWrapper from './Footer';
import CopyrightComponent from '../../atoms/Copyright/CopyrightComponent';

const FooterComponent: FunctionComponent = () => (
  <FooterWrapper>
    <CopyrightComponent />
  </FooterWrapper>
);

export default FooterComponent;
