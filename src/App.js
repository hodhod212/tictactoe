import React from 'react';
import './styles/root.scss';
import Board from './components/Board';
export default () => (
  <div className="app">
    <h1>Tic Tac Toe</h1>
    <Board />
  </div>
);
