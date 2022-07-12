const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


socket.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.on('listening', () => {
    const address = socket.address()
    console.log(`server listening ${address.address}:${address.port}`);
})

socket.on('data', line => {
    console.log(line.toString());
})

socket.bind(8081)