//Import the necessary modules for the server
const http = require('http'); //With just the name it will import the module

const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');


const app = express();

//Setting the default engine to pug through the express api
app.set('view engine', 'pug');
app.set('views', 'views');



//Import route admin object
const adminData = require('./routes/admin');

//Import route shop object
const shopRoutes = require('./routes/shop');

//Middleware to parse incoming data using third party library to do so
//With this we get a Js Object this will only work for som data, not for Files and others
app.use(bodyParser.urlencoded({extended: false}));


//For segmented routes such '/admin/add-product' we can put the first segment (/admin) as first parameter of the function => app.use('/admin', adminData);
app.use('/admin/', adminData.routers);
//Express function to serve static files and allow the passed path to be public
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRoutes);


//Pagae not found
app.use((req, res, next) =>{
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle : 'Page Not Found'});
});









//Calls the create Server and listen
app.listen(3000);
