const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const { Buffer } = require('buffer');

socket.on('message', (msg, rinfo) => {
  const client = {
    port: rinfo.port,
    address: rinfo.address,
  };

  console.log('> Nova Solicitação');

  console.log(`Cliente: ${msg}`);

  msg = msg.toString().split(' ');

  const int1 = parseInt(msg[0]);
  const int2 = parseInt(msg[1]);
  const op = msg[2];

  const result = calculate(int1, int2, op);

  const message = Buffer.from(result);
  socket.send(message, client.port, client.address, (err) => {});
});

socket.bind(8081);

function calculate(int1, int2, op) {
  let result = 0;
  switch (op) {
    case '+':
      result = int1 + int2;
      break;
    case '-':
      result = int1 - int2;
      break;
    case '*':
      result = int1 * int2;
      break;
    case '/':
      result = int1 / int2;
      break;
    default:
      break;
  }
  return result.toString();
}
