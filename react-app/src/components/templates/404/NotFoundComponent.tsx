import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

import {
  NotFoundWrapper,
  NotFoundBackground,
  BackWrapper,
} from './NotFound';
import { BlackButtonWithBorder } from '../../atoms/Button/Button';
import CopyrightComponent from '../../atoms/Copyright/CopyrightComponent';
import { TopNavWrapper } from '../../organisms/Header/HeaderElements';

const NotFoundComponent: FunctionComponent = () => {
  const history = useHistory();

  return (
    <div>
      <TopNavWrapper>
        <CopyrightComponent />
      </TopNavWrapper>
      <NotFoundWrapper>
        <NotFoundBackground />
      </NotFoundWrapper>
      <BackWrapper>
        <BlackButtonWithBorder onClick={() => history.push('/')}>GO BACK TO HOME</BlackButtonWithBorder>
      </BackWrapper>
    </div>
  );
};

export default NotFoundComponent;
