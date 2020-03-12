const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

// const {toggle} = require('./led-controll');
const {bat, toggle} = require('./led-controll')

const app = express();

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'web-app/index.html'), {
    headers: {
        'Content-type': 'text/html',
     }
    });
});

//Send asset files

app.use('/assets/', express.static(path.resolve(__dirname, 'web-app')));
app.use('/assets/', express.static(path.resolve(__dirname, 'node-modules/socket.io-client/dist')));

const server = app.listen(9000,()=> console.log('express server started'));

const io = socketIO(server);

const batteryUpdate = function (client) {
    let batteryHealth = bat();
    client.emit('battery-health-response', batteryHealth)
    setTimeout(batteryUpdate, 5000, client)
}

io.on('connection', (client)=> {
    console.log('socket: ', 'a client connected', client.id);

    client.on('led-toggle', (data)=> {
        console.log('receives led toggle event.');
        // toggle(data.r, data.g, data.b);
        batteryUpdate(client)
    });

    client.on('battery-health-request', ()=> {
        console.log('received battery health event');
        batteryUpdate(client)
    })
});


