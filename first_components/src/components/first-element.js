import React from 'react';

export class SecondHeader extends React.Component {
  render () {
    return <h2>Hello world!</h2>
  }
};

export class ThirdHeader extends React.PureComponent {
  render () {
    return <h3>Hello world!</h3>
  }
};

export const FourthHeader = () => <h4>Hello world!</h4>;
