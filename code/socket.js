const express = require('express');
const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http);

const store = { users: {} };

io.on('connection', (socket) => {
  const { token } = socket.handshake.query;

  if (store.users[token]) {
    store.sockets[token][socket.id] = true;
  } else {
    store.sockets[token] = {};
    store.sockets[token][socket.id] = true;
  }

  io.emit('users_change', { data: store.users });

  socket.on('disconnect', () => {
    console.log('user disconnect', socket.id);
    delete store.sockets[token][socket.id];
    io.emit('users_change', { data: store.users });
  });
});