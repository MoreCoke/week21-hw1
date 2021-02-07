import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ResetStyle } from './style';
import TodoList from './TodoList';

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
