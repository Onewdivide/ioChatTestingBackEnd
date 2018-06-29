var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socketClient = require('socket.io-client');

users = [];
connections = [];

server.listen(process.env.PORT || 8080);
console.log('Server is running on port 8080 ...')

const port = process.env.PORT || 8081;
// var serverBackEnd = app.listen(port);
const socket = socketClient('http://localhost:3137');

socket.on('queryAgain', data => {
    console.log('please query again'+data);
});

socket.on('queryAll',data =>{
    console.log('please query again : '+data);
})

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});