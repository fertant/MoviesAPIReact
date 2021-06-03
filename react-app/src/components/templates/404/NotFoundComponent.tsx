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
import img from '../../../../images/404-page.jpg';

const NotFoundComponent: FunctionComponent = () => {
  const history = useHistory();

  return (
    <div>
      <TopNavWrapper>
        <CopyrightComponent />
      </TopNavWrapper>
      <NotFoundWrapper>
        <NotFoundBackground>
          <img src={img} alt="404 background" />
        </NotFoundBackground>
      </NotFoundWrapper>
      <BackWrapper>
        <BlackButtonWithBorder onClick={() => history.push('/')}>GO BACK TO HOME</BlackButtonWithBorder>
      </BackWrapper>
    </div>
  );
};

export default NotFoundComponent;
