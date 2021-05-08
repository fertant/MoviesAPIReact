import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionCreateMovie, actionControlVisibility } from '../../../actions/Actions';
import { IModalProps } from './IDialog';
import {
  Overlay,
  Dialog,
  DialogHeader,
  CloseButton,
  DialogBody,
} from './Dialog';
import EditMovieForm from '../Forms/EditMovieForm';
import AddMovieForm from '../Forms/AddMovieForm';
import DeleteMovieForm from '../Forms/DeleteMovieForm';
import { IMovie } from '../MovieCard/IMovie';

const DialogComponent: FunctionComponent<IModalProps> = ({ type }) => {
  const visible = useSelector(({ modals: { [type]: visibility } }) => visibility);
  const dispatch = useDispatch();
  const onClose = () => dispatch(actionControlVisibility(type, false));
  const addMovieHandler = (movie: IMovie) => {
    dispatch(actionCreateMovie(movie));
    dispatch(actionControlVisibility('add', false));
  };

  return !!visible && (
    <Overlay>
      <Dialog>
        <DialogHeader>
          <CloseButton onClick={onClose}>˟</CloseButton>
        </DialogHeader>
        <DialogBody>
          {(() => {
            switch (type) {
              case 'edit':
                return <EditMovieForm />;
              case 'add':
                return <AddMovieForm addMovieHandler={addMovieHandler} />;
              case 'delete':
                return <DeleteMovieForm />;
              default:
                return '';
            }
          })()}
        </DialogBody>
      </Dialog>
    </Overlay>
  );
};

export default DialogComponent;
