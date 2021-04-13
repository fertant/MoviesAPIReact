import React from 'react';
import { shallow } from 'enzyme';
import FunctionalComponentTitle from '../../../components/FunctionalComponentTitle/FunctionalComponentTitle';

test('FunctionalComponentTitle check text inserted', () => {
  const header = shallow(<FunctionalComponentTitle type="Test" />);
  expect(header.text()).toEqual('Hello world by Test!');
});