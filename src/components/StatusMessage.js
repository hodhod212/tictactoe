import React from 'react';

function StatusMessage({ winner, current }) {
  const noMoverLeft = current.board.every(element => element !== null);
  return (
    <>
      <h2>
        {winner && `Winner is ${winner}`}
        {!winner &&
          !noMoverLeft &&
          `Next player is ${current.isItNext ? 'x' : '0'}`}
        {!winner && noMoverLeft && 'x and 0 tied'}
      </h2>
    </>
  );
}

export default StatusMessage;
