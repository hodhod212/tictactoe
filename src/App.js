import React, { useState } from 'react';
import './styles/root.scss';
import Board from './components/Board';
import { calculateWinner } from './helper';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isItNext, setIsItNext] = useState(false);
  const winner = calculateWinner(board);
  console.log(winner);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isItNext ? 'x' : '0'}`;
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isItNext ? 'x' : '0';
        }
        return square;
      });
    });
    setIsItNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h4>{message}</h4>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
