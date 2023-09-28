// src/components/Hangman.js
import React from 'react';

const Hangman = ({ mistakes }) => {
  // Define an array of hangman stages (each stage represents a mistake)
  const hangmanStages = [
    `
     ______
    |      |
    |
    |
    |
    |
    |
   `,
    `
     ______
    |      |
    |      O
    |
    |
    |
    |
   `,
    `
     ______
    |      |
    |      O
    |      |
    |
    |
    |
   `,
    `
     ______
    |      |
    |      O
    |     /|
    |
    |
    |
   `,
    `
     ______
    |      |
    |      O
    |     /|\\
    |
    |
    |
   `,
    `
     ______
    |      |
    |      O
    |     /|\\
    |     /
    |
    |
   `,
    `
     ______
    |      |
    |      O
    |     /|\\
    |     / \\
    |
    |
   `,
  ];

  // Render the hangman figure based on the number of mistakes
  const renderHangman = () => {
    if (mistakes < hangmanStages.length) {
      return <pre className="hangman-figure">{hangmanStages[mistakes]}</pre>;
    } else {
      // If the game is lost, display the full hangman
      return <pre className="hangman-figure">{hangmanStages[hangmanStages.length - 1]}</pre>;
    }
  };

  return (
    <div className="hangman">
      {renderHangman()}
    </div>
  );
};

export default Hangman;
