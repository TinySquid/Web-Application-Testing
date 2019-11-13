import React from 'react';

const Display = ({ balls, strikes }) => {
  return (
    <p>
      Balls: {balls} | Strikes: {strikes}
    </p>
  );
}

export default Display;
