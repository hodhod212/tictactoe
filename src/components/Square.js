import React from 'react';
import '../styles/root.scss';
function Square({ value }) {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
}

export default Square;
