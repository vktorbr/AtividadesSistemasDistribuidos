const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handleConnection = (socket) => {
  console.log('> Novo Cliente');

  socket.on('end', () => {
    console.log('> Cliente Desconectado');
  });

  //enviar dados
  rl.addListener('line', (line) => {
    socket.write(line);
  });

  //receber dados
  socket.on('data', (data) => {
    console.log(`Cliente: ${data.toString()}`);
  });
};

const server = net.createServer(handleConnection);
server.listen(4005, '127.0.0.1', function () {
  console.log('Servidor em Execução');
});
