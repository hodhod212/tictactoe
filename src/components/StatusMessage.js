import React from 'react';

function StatusMessage({ winner, current }) {
  const noMoverLeft = current.board.every(element => element !== null);
  return (
    <div className="status-messGE">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'x' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoverLeft && (
        <>
          Next player is{' '}
          <span className={current.isItNext ? 'text-green' : 'text-orange'}>
            {current.isItNext ? 'x' : '0'}
          </span>
        </>
      )}
      {!winner && noMoverLeft && (
        <>
          <span className="text-green">x</span>
          <span className="text-orange">0</span>
        </>
      )}
    </div>
  );
}

export default StatusMessage;
