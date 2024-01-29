const path = require('path');

const express = require('express');

const productsController = require('../controllers/product');

//Express js module to route http petitions --> get, post etc
const router = express.Router();





//Function to handle request and response
//We pass just the reference to that function
router.get('/add-product', productsController.getAllProducts);

//app.get() and a.post() for filtering those requests
router.post('/add-product', productsController.postAddProduct);

module.exports = router;