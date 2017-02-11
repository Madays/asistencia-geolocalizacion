var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');

var router = express();

var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'public')));

server.listen(4000,"0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
