// JSON Server module
/*
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.port || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, '10.0.0.4');

// Export the Server API
module.exports =server;
*/

var fs = require('fs'),
  https = require('https'),
  jsonServer = require('json-server'),
  server = jsonServer.create(),
  router = jsonServer.router('db/db.json'),
  middlewares = jsonServer.defaults();

var options = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem')
};

server.use(middlewares);
server.use(router);

https.createServer(options, server).listen(3000, function() {
  console.log("json-server started on port " + 3000);
});

