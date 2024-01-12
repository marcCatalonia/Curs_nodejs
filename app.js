//Import the necessary modules for the server
const http = require('http'); //With just the name it will import the module

const handler = require('./route');


//Create a new server
//Arrow functin with two params request and response
const server = http.createServer(handler);

//Make the server listen to calls trough port 3000
server.listen(3000);