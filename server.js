const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('Neue WebSocket-Verbindung erhalten.');

    ws.on('message', function incoming(message) {
        console.log('Nachricht erhalten:', message);
    });

    ws.on('close', function close() {
        console.log('WebSocket-Verbindung geschlossen.');
    });
});

console.log('WebSocket-Server läuft auf ws://localhost:8080/');