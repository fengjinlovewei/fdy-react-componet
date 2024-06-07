/*
 * @file:
 * @author: fengjin02
 */

import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

import './base.css';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

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

const Layer = () => {
  return <div className='layer-box'></div>;
};

const content = document.createElement('div');

export const openLayer = () => {
  // const content = document.createElement('div');
  // ReactDOM.createRoot(content).render(<Layer></Layer>);
  // document.body.appendChild(content);

  document.body.appendChild(content);

  const callback = data => {
    console.log('elementcallback', callback);
  };

  ReactDOM.render(<Layer />, content, callback);
};

export const closeLayer = () => {
  const unmountResult = ReactDOM.unmountComponentAtNode(content);

  if (unmountResult && content.parentNode) {
    content.parentNode.removeChild(content);
  }
};

setTimeout(() => {
  openLayer();
  setTimeout(() => {
    closeLayer();
  }, 3000);
}, 3000);
