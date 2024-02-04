const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

//Express js module to route http petitions --> get, post etc
const router = express.Router();





//Function to handle request and response
//We pass just the reference to that function
router.get('/add-product', adminController.getAllProducts);

// /admin/products => GET
router.get('/products', adminController.getProducts)

//app.get() and a.post() for filtering those requests
router.post('/add-product', adminController.postAddProduct);

module.exports = router;