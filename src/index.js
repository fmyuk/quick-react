import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyBook from './MyBook';
import MyHello from './MyHello';

const book = {
  isbn:'WGS-JST-001',
  title:'速習 webpack',
  price:454,
  published:'WINGSプロジェクト'
};

ReactDOM.render(
  <MyHello />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
