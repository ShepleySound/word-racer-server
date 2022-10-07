'use strict';

require('dotenv').config()
const PORT = process.env.PORT;
const io = require('socket.io')(PORT || 3002);

const Player = require('./src/player.js');
const wordsArray = require('./lib/words.json');

const GameState = require('./lib/game-state');

// Initialize the game state with the proper IO server and words to choose from.
const gs = new GameState(io, wordsArray);

io.on('connection', (socket) => {
  console.log('hello', PORT, socket.id);
  console.log(io.of('/').server.engine.clientsCount);

  // Whenever a player disconnects
  socket.on('disconnect', () => {
    console.log('A client disconnected.');
  });

  // Whenever a player joins the game
  socket.on('join-game', (player) => {
    // To-Do -- Handle receiving a null/undefined player name - maybe give a random identifier?
    new Player(player, socket.id);
    console.log(`${Player.instances[socket.id].username} joined the game!`);
    socket.join('game-room');
    socket.to('game-room').emit('broadcast-joined-event', Player.instances[socket.id].username);
    socket.emit('game-start', (Player.instances[socket.id].username));
  });

  // Whenever a player sends a word attempt during the game session
  socket.on('attempt', (input, player) => {
    console.log('attempt made - ', input, player);
    console.log(gs.currentWord)
    if (input === gs.currentWord) {
      Player.instances[socket.id].incrementScore();
      socket.emit('success', (Player.instances[socket.id].score));
      socket.to('game-room').emit('broadcast-success', player);
      gs.newWord();
      clearInterval(gs.wordTimer);
      gs.wordTimer = setInterval(gs.newWord, 5000);
    }
  });

});