const store = require('./store');


function addProduct (body) {
    return store.add(body);
}

function getProducts(){
    return new Promise( (resolve, reject) => {
        resolve(store.list())
    });
}

function getProduct (id) {
    return new Promise( (resolve, reject) => {
        if(!id){
            reject('Invalid ID');
        }
        resolve(store.get())
    });
}

module.exports = {
    addProduct,
    getProducts,
    getProduct
}