var app = require('express')();
var http = require('http').createServer(app);

var port = process.env.PORT || 3000;

//routing
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contacto.html');
});

/*io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});*/

http.listen(port, function(){
  console.log('listening on *:' + port);
});