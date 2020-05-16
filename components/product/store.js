const Model = require('./model');

function addProduct(data) {
    const product = new Model(data);
    return  product.save();
}

function getProducts(){
    return Model.find();
}

function getProduct(id){
    return Model.findOne({
        _id: id
    });
}

module.exports = {
    add: addProduct,
    list: getProducts,
    get: getProduct
}