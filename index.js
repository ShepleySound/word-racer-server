'use strict';

require('dotenv').config()
const PORT = process.env.PORT;
const io = require('socket.io')(PORT || 3002);

const wordsArray = require('./lib/words.json');

const GameState = require('./lib/game-state');

// Initialize the game state with the proper IO server and words to choose from.
const gs = new GameState(io, wordsArray);

console.log(gs.currentWord)
io.on('connection', (socket) => {
  console.log('hello', PORT, socket.id);
  console.log(io.of('/').server.engine.clientsCount);

  // Whenever a player disconnects
  socket.on('disconnect', () => {
    console.log('A client disconnected.');
  });

  // Whenever a player joins the game
  socket.on('join-game', (player) => {
    console.log(`${player} joined the game!`);
    socket.join('game-room');
    socket.to('game-room').emit('broadcast-joined-event', player);
    socket.emit('game-start');
  });

  // Whenever a player sends a word attempt during the game session
  socket.on('attempt', (input, player) => {
    console.log('attempt made - ', input, player);
    console.log(gs.currentWord)
    if (input === gs.currentWord) {
      socket.emit('success');
      socket.to('game-room').emit('broadcast-success', player);
      gs.newWord();
      clearInterval(gs.wordTimer);
      gs.wordTimer = setInterval(gs.newWord, 5000);
    }
  });

});