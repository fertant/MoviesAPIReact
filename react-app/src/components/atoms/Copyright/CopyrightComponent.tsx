import React, { FunctionComponent } from 'react';

import { ICopyright } from './ICopyright';
import { CopyrightWrapper } from './CopyrightWrapper';

const CopyrightComponent: FunctionComponent<ICopyright> = ({ first, second }) => (
  <CopyrightWrapper>
    <a href="/">
      <strong>{first}</strong>
      &nbsp;
      {second}
    </a>
  </CopyrightWrapper>
);

CopyrightComponent.defaultProps = {
  first: 'netflix',
  second: 'roulette',
};

export default CopyrightComponent;
