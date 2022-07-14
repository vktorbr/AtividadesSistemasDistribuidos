const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const readline = require('readline');
const { Buffer } = require('buffer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = {
  port: '',
  address: '',
};

socket.on('message', (msg, rinfo) => {
  console.log(`Cliente: ${msg}`);

  client.port = rinfo.port;
  client.address = rinfo.address;
});

rl.addListener('line', (line) => {
  if (client.port !== '' && client.address !== '') {
    const message = Buffer.from(line);
    socket.send(message, client.port, client.address, (err) => {});
  } else {
    console.log('Espere um cliente enviar uma msg primeiro!');
  }
});

socket.bind(8081);
