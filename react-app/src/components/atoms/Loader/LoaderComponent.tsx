import React, { FunctionComponent } from 'react';

import {
  Element,
  Label,
  LoaderWrapper,
  MainLoaderWrapper,
} from './Loader';

const LoaderComponent: FunctionComponent = () => (
  <MainLoaderWrapper>
    <LoaderWrapper>
      <Label>loading</Label>
      <Element />
    </LoaderWrapper>
  </MainLoaderWrapper>
);

export default LoaderComponent;
