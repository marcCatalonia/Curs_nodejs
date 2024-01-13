const express = require('express');


const app = express();

/* We put listener in this order because the middleware
reads from top to bottom. Once reads the first listener, if matches
won't read the next one */
app.use('/users', (req, res, next)=>{
    console.log('Users screen');
    res.send("<h1>Users Screen</h1>");
    //next();
    //();
});

app.use('/', (req, res, next)=>{
        console.log('Home');
        res.send("<h1>Assignment 1</h1>");
        ///next();
});





app.listen(3000);