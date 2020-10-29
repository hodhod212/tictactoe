import React from 'react';
import '../styles/root.scss';
function Square({ value, onClick, isWinningSquare }) {
  return (
    <button
      type="button"
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'x' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
}

export default Square;
