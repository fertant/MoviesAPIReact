import React from 'react';
import { shallow } from 'enzyme';
import CreateElementTitle from '../../../components/CreateElementTitle/CreateElementTitle';

test('CreateElementTitle check text inserted', () => {
  const header = shallow(<CreateElementTitle type="TestElement" />);
  expect(header.text()).toEqual('Hello world by TestElement!');
});