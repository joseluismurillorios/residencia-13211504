const express = require('express');
const app = express();
const http = require('http').Server(app);

/**\textcolor{allcomment}{// Inicializar sockets } -*/
const io = require('socket.io')(http);

/**\textcolor{allcomment}{// Variable para almacenar usuarios activos } -*/
const store = { users: {} };

/**\textcolor{allcomment}{// Ejecutar función cuando un cliente se conecte } -*/
io.on('connection', (socket) => {
  /**\textcolor{allcomment}{// Obtener token del cliente } -*/
  const { token } = socket.handshake.query;

  /**\textcolor{allcomment}{// Verificar y almacenar el id del socket } -*/
  if (store.users[token]) {
    /**\textcolor{allcomment}{// El cliente tiene varias ventans activas } -*/
    store.sockets[token][socket.id] = true;
  } else {
    /**\textcolor{allcomment}{// El cliente se conecta por primera vez } -*/
    store.sockets[token] = {};
    store.sockets[token][socket.id] = true;
  }

  /**\textcolor{allcomment}{// Emitir usuarios activos a todos los clientes } -*/
  io.emit('users_change', { data: store.users });

  /**\textcolor{allcomment}{// Ejecutar función cuando el cliente se desconecte } -*/
  socket.on('disconnect', () => {
    /**\textcolor{allcomment}{// Remover socket y emitir usuarios activos } -*/
    delete store.sockets[token][socket.id];
    io.emit('users_change', { data: store.users });
  });
});