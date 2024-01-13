//Import the necessary modules for the server
const http = require('http'); //With just the name it will import the module

const express = require('express');

const bodyParser = require('body-parser');


const app = express();



//Middleware to parse incoming data using third party library to do so
//With this we get a Js Object this will only work for som data, not for Files and others
app.use(bodyParser.urlencoded({extended: false}));

//Function to handle request and response
app.use('/add-product', (req, res, next)=>{
    res.send('<form action="/product" method="POST"> <input type="text"name="title"> <button type="submit">Add product</button></form>');
});

//app.get() and a.post() for filtering those requests
app.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/')
});

//Use works for all Http methods
app.use('/', (req, res, next)=>{
    res.send('<h1>Hello from Express.js!</h1>')
    //next(); //Allows the request to continue to the next middleware
});

//Calls the create Server and listen
app.listen(3000);
