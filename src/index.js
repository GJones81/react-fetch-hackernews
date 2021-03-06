import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFun from './AppFun';
import * as serviceWorker from './serviceWorker';
import AppClass from './AppClass';

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
