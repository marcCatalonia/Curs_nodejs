const http = require('http');

const handler = require('./route');

const server = http.createServer(handler);

console.log('something');

server.listen(3000);