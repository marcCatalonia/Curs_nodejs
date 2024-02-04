const Product = require('../models/product'); //First Uppercase because we import a class




exports.getProducts = (req, res, next)=>{
    //We pass a function as parameter to be called back once it has the products
    Product.fetchAll((products) =>{
        //call the static function to get all Products
        res.render('shop/product-list', {prods : products, pageTitle: 'All products', path : '/products'});
    }); 
    
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