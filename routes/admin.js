const express = require('express');

//Express js module to route http petitions --> get, post etc
const router = express.Router();


//Function to handle request and response
router.get('/add-product', (req, res, next)=>{
    res.send('<form action="/admin/product" method="POST"> <input type="text"name="title"> <button type="submit">Add product</button></form>');
});

//app.get() and a.post() for filtering those requests
router.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;
