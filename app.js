var express = require('express');
var app = express();
 
var http = require('http');
var server = http.Server(app);
 
var socket = require('socket.io');
var io = socket(server);
 
var port = 5000;
var socketList = [];

// ----------------------------------------------------
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var certRouter = require('./routes/certification');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false })); // body yeah
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/cert', certRouter);
// ----------------------------------------------------

app.use('/', function(req, resp) {
    resp.redirect("/index");

});
 
io.on('connection', function(socket) {
    socketList.push(socket);
    console.log('User Join');
 
    socket.on('SEND', function(msg) {
        console.log(msg);
        socketList.forEach(function(item, i) {
            console.log(item.id);
            if (item != socket) {
                item.emit('SEND', msg);
            }
        });
    });
 
    socket.on('disconnect', function() {
        socketList.splice(socketList.indexOf(socket), 1);
    });
});
 
server.listen(port, function() {
    console.log('Server On !');
});

// ----------------------------------------------------
module.exports = app;
// ----------------------------------------------------