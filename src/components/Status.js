import React from 'react';


const Status = ({ gameStatus, onRestartClick, lostWord }) => {
  return (
    <div className="status">
      {gameStatus === 'win' && (
        <div className="win-status">
          <h2>Congratulations! You Won!</h2>
          <button onClick={onRestartClick}>Play Again</button>
        </div>
      )}
      {gameStatus === 'lose' && (
        <div className="lose-status">
          <h2>Game Over! You Lost!</h2>
          <p>The word was: {lostWord}</p> {/* Display the lost word */}
          <button onClick={onRestartClick}>Try Again</button>
        </div>
      )}
      {gameStatus === 'ongoing' && (
        <div className="ongoing-status">
          <h2>Good Luck!</h2>
        </div>
      )}
    </div>
  );
};

export default Status;

