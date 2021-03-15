import React, { FunctionComponent } from 'react';

import { IButton } from './IButton';
import { Button, SearchButton, AddButton } from './Button';

const ButtonComponent: FunctionComponent<IButton> = ({ type, text }) => {
  switch(type) {
    case 'search':
      return(<SearchButton>{text}</SearchButton>);
      break;
    case 'add':
      return(<AddButton>{text}</AddButton>);
      break;
    default:
      return(<Button>{text}</Button>);
  }
};

export default ButtonComponent;
