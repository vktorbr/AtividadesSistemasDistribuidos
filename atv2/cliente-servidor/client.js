//importa modulos necessarios
const dgram = require('dgram');
const { Buffer } = require('buffer');
const readline = require('readline');

//criar interface para pegar dados do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//criacao do socket do cliente
const client = dgram.createSocket('udp4');

rl.addListener('line', (line) => {
  //empacota a mensagem a ser enviada
  const message = Buffer.from(line);

  client.send(message, 8081, 'localhost', (err) => {});
});

client.on('message', (message) => {
  console.log(`Servidor: ${message}`);
});
