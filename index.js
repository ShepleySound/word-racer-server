'use strict';

require('dotenv').config()
const PORT = process.env.PORT;
const io = require('socket.io')(PORT || 3002);


io.on('connection', (socket) => {
  console.log('hello', PORT, socket.id)
  console.log(io.of('/').server.engine.clientsCount);

  socket.on('disconnect', () => {
    console.log('A client disconnected.');
  });

  socket.on('join-game', (name) => {
    console.log(`${name} joined the game!`);
    socket.join('game-room');
    socket.to('game-room').emit('joined-event', name)
  });

});