// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var ioBackEnd = require('socket.io').listen(server);

// users = [];
// connections = [];

// server.listen(process.env.PORT || 3000);
// console.log('Server is running on port 3000 ...')

// app.get('/',function(req,res){
//     res.sendFile(__dirname+'/index.html');
// });

// ioBackEnd.sockets.on('connection',function(socket){
//     connections.push(socket);
//     console.log('Connected : %s socket(s) connected',connections.length);

//     //Disconnect
//     socket.on('disconnect',function(data){
//     connections.splice(connections.indexOf(socket),1);
//     console.log('Disconnect : %s socket(s) connected',connections.length);    
//     })
      
//     socket.on('send message', function(data){
//         console.log('this is send from client : '+data);
//         ioBackEnd.sockets.emit('new message', {msg:data});
//     });


// });

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const promise = require('bluebird');
const app = express();
global.port = process.env.PORT || 8081;
const option = {
    promiseLib: promise
};
console.log('Server is running on port 8081...');
const pgPromise = require('pg-promise')(option);
global.db = pgPromise(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const delegateRoutes = require('./api/route/route');

delegateRoutes(app);
// app.listen(port);

var serverBackEnd = app.listen(port);
var socket = require('socket.io');
global.ioBAckEnd = socket.listen(serverBackEnd);

global.ioBAckEnd.on('connection', socket => {
    socket.on('disconnect',() => {
        console.log('disconnect')
    })
    // socket.emit('queryAgain',1);
})
