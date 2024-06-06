/*
 * @file:
 * @author: fengjin02
 */

import React, { Component } from 'react';

import './base.css';

console.log('运行了组件abcd');

export const Text = props => {
  const { text = '小明' } = props;
  return <h1 className='fdy-text'>{text}</h1>;
};

export class Text2 extends Component {
  state = {
    name: 'fdy',
  };
  render() {
    return <h2 className='fdy-text'>{this.state.name}</h2>;
  }
}
