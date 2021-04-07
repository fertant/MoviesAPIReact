import React, { createContext, useReducer } from 'react';

import { IControlAction } from './IControlAction';

const defaultState = {
  add: false,
  edit: false,
  delete: false,
  details: false,
  movieType: 'all',
  movieQuery: '',
  movieSort: 'yearOfRelease',
};

export const AppContext = createContext(defaultState);

export const actionControlVisibility = (
  modalType: string,
  visibility: boolean,
): IControlAction => ({
  type: 'SET_MODAL_VISIBILITY',
  payload: {
    modalType,
    visibility,
  },
});

export const actionFilter = (
  filterType: string,
  filterSetting: string,
): IControlAction => ({
  type: 'SET_FILTER',
  payload: {
    filterType,
    filterSetting,
  },
});

const reducer = (state: any, action: IControlAction) => {
  switch (action.type) {
    case 'SET_MODAL_VISIBILITY': {
      const { payload: { modalType, visibility } } = action;
      return { ...state, [modalType]: visibility };
    }
    case 'SET_FILTER': {
      const { payload: { filterType, filterSetting } } = action;
      return { ...state, [filterType]: filterSetting };
    }
    default: return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const store = { state, dispatch };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
