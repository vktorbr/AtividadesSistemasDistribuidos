const net = require('net');
const readline = require('readline');

const client = new net.Socket();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.connect(4005, '127.0.0.1', () => {
  console.log('Conectado');

  //enviar dados
  rl.addListener('line', (line) => {
    client.write(line);
  });
});

//receber dados
client.on('data', (data) => {
  console.log(`Sevidor: ${data.toString()}`);
});
