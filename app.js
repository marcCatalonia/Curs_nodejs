//Import the necessary modules for the server
const http = require('http'); //With just the name it will import the module

const express = require('express');

const bodyParser = require('body-parser');


const app = express();

//Import route admin object
const adminRoutes = require('./routes/admin');

//Import route shop object
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);



//Middleware to parse incoming data using third party library to do so
//With this we get a Js Object this will only work for som data, not for Files and others
app.use(bodyParser.urlencoded({extended: false}));





//Calls the create Server and listen
app.listen(3000);
