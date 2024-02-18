const fs = require('fs');

const path = require("path");
const localPath = require("../util/path");
const p = path.join(localPath, "data", "cart.json");




module.exports = class Cart{

    static addProduct(id, productPrice){
        //Fetch the previous cart
        fs.readFile(p, (err, fileContent) =>{
            let cart = {products : [], totalPrice : 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }

            //Analyse the cart=> Find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            //Add new product / increase quantity
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
                updatedProduct = {id : id, qty : 1};
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice+ +productPrice; //+ before the variable converts that string to a number

            fs.writeFile(p, JSON.stringify(cart), err =>{
                console.log(err);
            });
            
        });
        //Analyze the cart => find existing product

        //Add product / increase quantity
    }

    constructor(){
        this.products = [];
        this.totalPrice = 0;
    }


};