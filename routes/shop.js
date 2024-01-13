
const path = require('path');

const express = require('express');

const router = express.Router();




//Use works for all Http methods
router.get('/', (req, res, next)=>{
    //__dirname is a global variable of nodejs which gives us the global path of our OS to this Project folder
    //../ used to change directory from /routes to project directory /Curs_nodejs so it does one step before
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); 
});


module.exports = router;