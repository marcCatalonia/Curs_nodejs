
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


const adminData = require('./admin');




//Use works for all Http methods
router.get('/', (req, res, next)=>{
    console.log(adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop');
});


module.exports = router;