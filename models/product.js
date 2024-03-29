const products = [];

const fs = require("fs");

const path = require("path");
const localPath = require("../util/path");
const p = path.join(localPath, "data", "products.json");

const getProductsFromFile = cb => {
    
    fs.readFile(p, (err, fileContent) =>{
        if(err){
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) =>{
            console.log(err);
        });
    });   
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }


  static findById(id, cb){
    getProductsFromFile(products =>{
      //get all products from the file and find the matching product in its ID with the find function
      const product = products.find(p => p.id == id);
      cb(product);
    });
  }
};
