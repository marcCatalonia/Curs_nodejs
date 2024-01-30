const products = [];

const fs = require("fs");
//const path = require('path');

const path = require("path");
const localPath = require("../util/path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(localPath, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
        let products = [];
        if(!err) { //If err is null
            products = JSON.parse(fileContent);

        }
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) =>{
            console.log(err);
        });
    });
    //products.push(this); //This refers to the Products instance of the class
  }

  static fetchAll(cb) {
    const p = path.join(localPath, "data", "products.json");
    fs.readFile(p, (err, fileContent) =>{
        if(err){
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
    //static to call this function directly to the class not trhough an instance
    return products;
  }
};
