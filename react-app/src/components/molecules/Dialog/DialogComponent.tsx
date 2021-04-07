import React, { FunctionComponent } from 'react';

import { useSelector, useDispatch } from '../../../hooks/CustomHooks';
import { actionControlVisibility } from '../../../context/AppContext';
import { IModalProps } from './IDialog';
import {
  Overlay,
  Dialog,
  DialogHeader,
  DialogTitle,
  CloseButton,
  DialogBody,
  DialogFooter,
} from './Dialog';
import { Button, BlackButtonWithBorder } from '../../atoms/Button/Button';

const DialogComponent: FunctionComponent<IModalProps> = ({ type }) => {
  const visible = useSelector(({ [type]: visibility }) => visibility);
  const dispatch = useDispatch();
  const onClose = () => dispatch(actionControlVisibility(type, false));

  return !!visible && (
    <Overlay>
      <Dialog>
        <DialogHeader>
          <DialogTitle>
            {type.toUpperCase()}
            &nbsp;
            MOVIE
          </DialogTitle>
          <CloseButton onClick={onClose}>˟</CloseButton>
        </DialogHeader>
        <DialogBody>
          I am &quot;
          {type}
          &quot; dialog
        </DialogBody>
        <DialogFooter>
          <BlackButtonWithBorder>RESET</BlackButtonWithBorder>
          <Button onClick={onClose}>SUBMIT</Button>
        </DialogFooter>
      </Dialog>
    </Overlay>
  );
};

export default DialogComponent;
