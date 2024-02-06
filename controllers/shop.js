const Product = require('../models/product'); //First Uppercase because we import a class




exports.getProducts = (req, res, next)=>{
    //We pass a function as parameter to be called back once it has the products
    Product.fetchAll((products) =>{
        //call the static function to get all Products
        res.render('shop/product-list', {prods : products, pageTitle: 'All products', path : '/products'});
    }); 
    
};

exports.getProduct = (req, res, next) =>{
    //Name of the varibale in the Route js object (/products/:productId)
    const prodId = req.params.productId;
    //console.log(prodId);

    //Call static method inside Product class passsing y param the id we are looking for and the callback function with the product we will receive
    Product.findById(prodId, product =>{
        console.log(product);
        res.render('shop/product-detail', {product : product});
    });
    //res.redirect('/');
};

exports.getIndex = (req, res, next) =>{
    //We pass a function as parameter to be called back once it has the products
    Product.fetchAll((products) =>{
        //call the static function to get all Products
        res.render('shop/index', {prods : products, pageTitle: 'Shop', path : '/'});
    }); 
}

exports.getCart = (req, res, next) =>{
    res.render('shop/cart', {
        path:'/cart',
        pageTitle: 'Your Cart',

    });
};

exports.postCart = (req, res, next) =>{
    //productId is the name in the name attribute of the input
    const prodId = req.body.productId; 
    console.log(prodId);
    res.redirect('/cart');
};

exports.getOrders = (req, res, next) =>{
    res.render('shop/orders', {
        path:'/orders',
        pageTitle: 'Your Orders',

    });
};

exports.getCheckout = (req, res, next) =>{
    res.render('shop/checkout', {
        path: 'checkout',
        pageTitle: 'Checkout'
    });
};