import React from 'react';
import { shallow } from 'enzyme';
import ComponentTitle from '../../../components/ComponentTitle/ComponentTitle';

test('ComponentTitle check text inserted', () => {
  const header = shallow(<ComponentTitle type="Test" />);
  expect(header.text()).toEqual('Hello world by Test!');
});