// JSON Server module
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

