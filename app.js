/**
 * Module dependencies
 */

var express = require('express'),
  util = require('util'),
  http = require('http');
  

var app = module.exports = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

console.log('-------- Module dependecies ------------');

util.inspect(express);
util.inspect(http);


util.inspect('-------- app / server / io ------------');

util.inspect(app);
util.inspect(server);
util.inspect(io);

console.log('-------- Module dependecies END ------------');



/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
  console.log('development environment');
}

// production only
if (app.get('env') === 'production') {
  console.log('production environment');
  // TODO
};


// Socket.io Communication
io.sockets.on('connection', require('./routes/socket'));

/**
 * Start Server
 */

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});