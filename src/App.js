// src/App.js
import React, { Component } from 'react';
import Word from './components/Word';
import Alphabet from './components/Alphabet';
import Hangman from './components/Hangman';
import Status from './components/Status';
import './components/Word.css';
import './components/Alphabet.css';
import './components/Hangman.css';
import './components/Status.css';

const words = ['EXAMPLE', 'HANGMAN', 'REACT', 'DEVELOPER', 'COMPUTER'];

class App extends Component {
  constructor() {
    super();
    // Initialize your state here
    this.state = {
      currentWord: this.getRandomWord(),
      guessedLetters: [],
      maxMistakes: 6,
      mistakes: 0,
      gameStatus: 'ongoing',
      lostWord: '', // Add lostWord to store the lost word
    };
  }

  // Function to select a random word from the array
  getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  // Function to handle letter guesses
  handleLetterGuess = (letter) => {
    const { currentWord, guessedLetters, maxMistakes, mistakes } = this.state;

    // Check if the letter has already been guessed
    if (guessedLetters.includes(letter)) return;

    // Check if the guessed letter is in the current word
    if (currentWord.includes(letter)) {
      // Update guessedLetters with the correct letter
      this.setState({
        guessedLetters: [...guessedLetters, letter],
      });
    } else {
      // Incorrect guess, increment mistakes
      this.setState({
        mistakes: mistakes + 1,
      });
    }

    // Check for win or loss
    if (this.isWin()) {
      this.setState({ gameStatus: 'win' });
    } else if (mistakes + 1 === maxMistakes) {
      // Set lostWord here when the user loses
      this.setState({ gameStatus: 'lose', lostWord: currentWord });
    }
  };

  // Function to check if the player has won
  isWin = () => {
    const { currentWord, guessedLetters } = this.state;
    return currentWord.split('').every((letter) => guessedLetters.includes(letter));
  };

  // Function to restart the game
  restartGame = () => {
    const newWord = this.getRandomWord(); // Get a new random word
    this.setState({
      currentWord: newWord,
      guessedLetters: [],
      mistakes: 0,
      gameStatus: 'ongoing',
      lostWord: '', // Reset lostWord when restarting
    });
  };

  render() {
    const { currentWord, guessedLetters, mistakes, gameStatus, lostWord } = this.state;

    return (
      <div className="App">
        <h1>Hangman Game</h1>
        <Word currentWord={currentWord} guessedLetters={guessedLetters} />
        <Alphabet onLetterClick={this.handleLetterGuess} guessedLetters={guessedLetters} />
        <Hangman mistakes={mistakes} />
        <Status gameStatus={gameStatus} onRestartClick={this.restartGame} lostWord={lostWord} />
      </div>
    );
  }
}

export default App;
