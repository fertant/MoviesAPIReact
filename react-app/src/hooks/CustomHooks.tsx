import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useSelector = fn => {
  const { state } = useContext(AppContext);
  return fn(state);
};
