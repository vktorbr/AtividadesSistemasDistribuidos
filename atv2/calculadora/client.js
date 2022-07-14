const dgram = require('dgram');
const { Buffer } = require('buffer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = dgram.createSocket('udp4');

rl.addListener('line', (line) => {
  const message = Buffer.from(line);

  client.send(message, 8081, 'localhost', (err) => {});
});

client.on('message', (message) => {
  console.log(`Servidor: ${message}`);
});
