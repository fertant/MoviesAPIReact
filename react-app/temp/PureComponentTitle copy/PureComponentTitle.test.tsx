import React from 'react';
import { shallow } from 'enzyme';
import PureComponentTitle from '../../../components/PureComponentTitle/PureComponentTitle';

// eslint-disable-next-line no-undef
test('ComponentTitle check text inserted', () => {
  const header = shallow(<PureComponentTitle type="Test" />);
  // eslint-disable-next-line no-undef
  expect(header.text()).toEqual('Hello world by Test!');
});
