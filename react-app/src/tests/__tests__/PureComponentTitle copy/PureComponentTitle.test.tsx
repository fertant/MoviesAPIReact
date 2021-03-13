import React from 'react';
import { shallow } from 'enzyme';
import PureComponentTitle from '../../../components/PureComponentTitle/PureComponentTitle';

test('ComponentTitle check text inserted', () => {
  const header = shallow(<PureComponentTitle type="Test" />);
  expect(header.text()).toEqual('Hello world by Test!');
});