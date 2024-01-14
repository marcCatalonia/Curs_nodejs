const http = require('http');


const express = require('express');
const path = require('path');

const app = express();


//Allow calls to Css files
app.use(express.static(path.join(__dirname, 'public')));


//Routes
const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');


app.use(homeRoutes);
app.use(usersRoutes);




app.listen(3000);