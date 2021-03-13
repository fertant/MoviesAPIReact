import React from 'react';

import { PropsTypeInterface } from '../GeneralTypes/PropsTypeInterface';
import styles from './CreateElementTitle.scss';

const titleConfig = { className: styles.createElementTitle };

const CreateElementTitle = ({ type }: PropsTypeInterface) => React.createElement('h2', titleConfig, `Hello world by ${type}!`);

export default CreateElementTitle;
