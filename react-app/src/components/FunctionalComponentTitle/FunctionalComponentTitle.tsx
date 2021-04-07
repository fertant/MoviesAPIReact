import React, { FunctionComponent } from 'react';

import { PropsTypeInterface } from '../GeneralTypes/PropsTypeInterface';
import styles from './FunctionalComponentTitle.scss';

const FunctionalComponentTitle: FunctionComponent<PropsTypeInterface> = ({ type }) => (
  <h2 className={styles.functionalComponentTitle}>
    Hello world by {type}!
  </h2>
);

export default FunctionalComponentTitle;
