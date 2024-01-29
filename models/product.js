const products = [];


module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
        products.push(this); //This refers to the Products instance of the class
    }

    static fetchAll(){ //static to call this function directly to the class not trhough an instance
        return products;
    }
};