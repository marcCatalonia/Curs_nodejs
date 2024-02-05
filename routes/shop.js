
const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();


//Use works for all Http methods
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);


// :productId is a variable param in the path url
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout);



module.exports = router;