const net = require('net');

const sockets = [];

const handleConnection = (socket) => {
  sockets.push(socket);
  console.log('> Novo Cliente');

  //enviar dados para os clientes menos para ele mesmo
  socket.on('data', (data) => {
    broadcast(data, socket);
  });

  socket.on('end', () => {
    console.log('> Cliente Desconectado');
  });
};

const server = net.createServer(handleConnection);
server.listen(4005, '127.0.0.1', function () {
  console.log('Servidor em Execução');
});

function broadcast(message, sender) {
  sockets.forEach((socket) => {
    if (socket !== sender) socket.write(message);
  });
}
