const randomWord = require('./random-element');

class GameState {
  // On initialization, choose a random word from the words array.
  constructor(io, wordChoices) {
    this.wordChoices = wordChoices;
    this.currentWord = randomWord(wordChoices);
    this.wordTimer = setInterval(this.newWord, 5000);
    this.io = io;
  };

  newWord = () => {
    this.currentWord = randomWord(this.wordChoices);
    console.log(this.currentWord);
    this.io.to('game-room').emit('word-switch', this.currentWord);
  };
}

module.exports = GameState;