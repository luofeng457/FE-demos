
const WebSocket = require('ws');

const socket = new WebSocket.Server({ port: 5555 });

socket.on('connection', ws => {
    ws.on('message', (data) => {
        console.log('data from client: ', data)
        ws.send('hello websocket...');
        console.log('server finish sending data...');
    })
})

console.log('server is running at port 5555');