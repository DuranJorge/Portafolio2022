var express =require('express');
var app = express();
var http = require('http').createServer(app);

var port = process.env.PORT || 3000;

//routing
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/inicio', function(req, res){
  res.sendFile(__dirname + '/public/inicio.html');
});
app.get('/acerca_de', function(req, res){
  res.sendFile(__dirname + '/public/acerca_de.html');
});
app.get('/portafolio', function(req, res){
  res.sendFile(__dirname + '/public/portafolio.html');
});
app.get('/contacto', function(req, res){
  res.sendFile(__dirname + '/public/contacto.html');
});

app.use(express.static("public"))
/*io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});*/

http.listen(port, function(){
  console.log('listening on *:' + port);
});