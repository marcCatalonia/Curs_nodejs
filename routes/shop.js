
const express = require('express');

const router = express.Router();




//Use works for all Http methods
router.get('/', (req, res, next)=>{
    res.send('<h1>Hello from Express.js!</h1>')
    //next(); //Allows the request to continue to the next middleware
});


module.exports = router;