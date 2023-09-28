import React, { Component } from 'react';

class Alphabet extends Component {
  state = {
    showHelp: false,
  };

  toggleHelp = () => {
    this.setState((prevState) => ({ showHelp: !prevState.showHelp }));
  };

  renderAlphabet = () => {
    const { onLetterClick, guessedLetters } = this.props;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return alphabet.map((letter) => (
      <button
        key={letter}
        className={`letter-button ${guessedLetters.includes(letter) ? 'disabled' : ''}`}
        onClick={() => onLetterClick(letter)}
        disabled={guessedLetters.includes(letter)}
      >
        {letter}
      </button>
    ));
  };

  render() {
    return (
      <div className="alphabet">
        <button
          className={`help-button ${this.state.showHelp ? 'active' : ''}`}
          onClick={this.toggleHelp}
        >
          Help
        </button>
        {this.state.showHelp && (
          <div className="help">
            <h2>Game Rules</h2>
            <p>- You start with a maximum of 6 mistakes allowed.</p>
            <p>- Click on letters to make your guesses.</p>
            <p>- If you guess a letter correctly, it will be revealed in the hidden word.</p>
            <p>- If you make 6 incorrect guesses, you lose the game.</p>
            <p>- Try to guess the entire word before running out of mistakes to win.</p>
          </div>
        )}
        {this.renderAlphabet()}
      </div>
    );
  }
}

export default Alphabet;
