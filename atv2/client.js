const net = require('net');
const readline = require('readline')

const client = new net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.addListener('line', line => {
    client.write(line)
})
