import React from 'react';
import { useSelector } from 'react-redux';

import { AlertPopup } from './alert';

const AlertComponent = () => {
  let type = 'success';
  const visible = useSelector(({ modals: { alert: visibility } }) => visibility);
  let text = useSelector(({ requestApi: { status: message } }) => message);
  const error = useSelector(({ requestApi: { error: message } }) => message);
  if (error) {
    text = error;
    type = 'error';
  }

  return !!visible && (
    <AlertPopup style={{ backgroundColor: type === 'success' ? 'green' : 'red' }}>
      {text}
    </AlertPopup>
  );
};

export default AlertComponent;
