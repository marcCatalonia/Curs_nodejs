const Product = require('../models/product'); //First Uppercase because we import a class

exports.getAllProducts = (req, res, next)=>{
    res.render('admin/add-product', {pageTitle : 'Add Product', path: '/admin/add-product'});
};


exports.postAddProduct = (req, res, next) =>{
    //console.log(req.body);
    //products.push({title : req.body.title});
    const title = req.body.title;
    const image = req.body.imageUrl;
    const price = req.bdy.price;
    const description = req.body.description;

    const product = new Product(title, image, description, price);
    product.save();
    res.redirect('/');
};


exports.getProducts = (req, res, next) =>{
    //We pass a function as parameter to be called back once it has the products
    Product.fetchAll((products) =>{
        //call the static function to get all Products
        res.render('admin/products', {prods : products, pageTitle: 'Admin Products', path : '/admin/products'});
    }); 
}