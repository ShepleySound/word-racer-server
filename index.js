'use strict';

require('dotenv').config()
const PORT = process.env.PORT;
const io = require('socket.io')(PORT || 3002);

let currentWord = 'wowee';

io.on('connection', (socket) => {
  console.log('hello', PORT, socket.id)
  console.log(io.of('/').server.engine.clientsCount);

  socket.on('disconnect', () => {
    console.log('A client disconnected.');
  });

  socket.on('join-game', (player) => {
    console.log(`${player} joined the game!`);
    socket.join('game-room');
    socket.to('game-room').emit('broadcast-joined-event', player);
    socket.emit('game-start');
  });

  socket.on('attempt', (input, player) => {
    console.log('attempt made - ', input);
    if (input === currentWord) {
      socket.emit('success');
      socket.to('game-room').emit('broadcast-success', player);
    }
  });

});