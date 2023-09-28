// src/components/Word.js
import React from 'react';


const Word = ({ currentWord, guessedLetters }) => {
  // Function to display the word with underscores for unguessed letters
  const displayWord = () => {
    return currentWord.split('').map((letter, index) => (
      <span key={index} className="letter">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  return (
    <div className="word">
      {displayWord()}
    </div>
  );
};

export default Word;
