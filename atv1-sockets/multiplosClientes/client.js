const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const waitUsername = new Promise((resolve) => {
  rl.question('Digite seu nome: ', (username) => {
    resolve(username);
  });
});

waitUsername.then((username) => {
  const client = new net.Socket();

  client.connect(4005, '127.0.0.1', () => {
    //enviar dados
    rl.addListener('line', (line) => {
      client.write(`${username}: ${line}`);
    });
  });

  //receber dados
  client.on('data', (data) => {
    console.log(data.toString());
  });
});
