var net = require('net');
net.createServer(function (socket) {
socket.write("Echo server\r\n");
socket.pipe(socket); }
).listen(3000, "127.0.0.1");