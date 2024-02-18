const fs = require('fs');

const path = require("path");
const localPath = require("../util/path");
const p = path.join(localPath, "data", "cart.json");




module.exports = class Cart{

    static addProduct(id){
        //Fetch the previous cart
        fs.readFile(p, (err, fileContent) =>{
            let cart = {products : [], totalPrice : 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }

            const existingProduct = cart.products.find(prod => prod.id === id);
            let updatedProduct;
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
            }
            else{
                updatedProduct = {id : id, qty : 1};
            }
        });
        //Analyze the cart => find existing product

        //Add product / increase quantity
    }

    constructor(){
        this.products = [];
        this.totalPrice = 0;
    }


};