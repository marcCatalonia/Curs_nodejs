const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

//Express js module to route http petitions --> get, post etc
const router = express.Router();


//Products array
const products = [];


//Function to handle request and response
router.get('/add-product', (req, res, next)=>{
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle : 'Add Product'});
});

//app.get() and a.post() for filtering those requests
router.post('/add-product', (req, res, next) =>{
    //console.log(req.body);
    products.push({title : req.body.title});
    res.redirect('/');
});

exports.routers = router;
exports.products = products;