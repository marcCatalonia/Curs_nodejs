//Import the necessary modules for the server
const http = require('http'); //With just the name it will import the module

const express = require('express');


const app = express();

//Function to handle request and response
app.use((req, res, next)=>{
    console.log('In the middleware');
    next(); //Allows the request to continue to the next middleware
});

app.use((req, res, next)=>{
    console.log('In another the middleware');
    res.send('<h1>Hello from Express.js!</h1>')
    next(); //Allows the request to continue to the next middleware
});

//Calls the create Server and listen
app.listen(3000);
//Create a new server
//Arrow functin with two params request and response
/* const server = http.createServer(app);

//Make the server listen to calls trough port 3000
server.listen(3000); */