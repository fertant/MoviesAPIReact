import React, { Component } from 'react';

import { PropsTypeInterface } from '../GeneralTypes/PropsTypeInterface';
import styles from './ComponentTitle.scss';

export default class ComponentTitle extends Component<PropsTypeInterface> {

  constructor(props: PropsTypeInterface) {
  	super(props)
  }

  render() {
    return (
      <h2 className={styles.componentTitle}>
        Hello world by {this.props.type}!
      </h2>
    );
  }
}
