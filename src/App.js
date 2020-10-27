import React, { useState } from 'react';
import './styles/root.scss';
import Board from './components/Board';
import { calculateWinner } from './helper';
const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isItNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  console.log(winner);
  console.log(history);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isItNext ? 'x' : '0'}`;
  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isItNext ? 'x' : '0';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isItNext: !last.isItNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h4>{message}</h4>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
