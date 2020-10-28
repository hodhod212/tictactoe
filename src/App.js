import React, { useState } from 'react';
import './styles/root.scss';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helper';
import StatusMessage from './components/StatusMessage';
const App = () => {
  const NEW_GAME = [{ board: Array(9).fill(null), isItNext: true }];
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winningSquares } = calculateWinner(current.board);

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
  const moveTo = move => {
    setCurrentMove(move);
  };
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h2>Tic Tac Toe</h2>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={onNewGame}>
        Start new game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
