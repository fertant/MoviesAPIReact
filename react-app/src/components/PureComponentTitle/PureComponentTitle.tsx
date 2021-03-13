import React, { PureComponent, ReactElement } from 'react';

import { PropsTypeInterface } from '../GeneralTypes/PropsTypeInterface';
import styles from './PureComponentTitle.scss';

export default class PureComponentTitle extends PureComponent<PropsTypeInterface> {
  render() {
    const { type } = this.props;
    return (
      <h2 className={styles.pureComponentTitle}>
        Hello world by {type}!
      </h2>
    );
  }
}
