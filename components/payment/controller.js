const store = require('./store');
const storeProduct = require('../product/store');


function addPayment (body) {
    let {product, type, method, value, bank} = body;
    return new Promise (async (resolve, reject) => {

        let tax = 0;
        let subtotal =0;

        let productObject = await storeProduct.get(product);
        let productType = productObject.type;

        if(productType !== 'manual')
        {
            tax = value/1.19;
            subtotal = value - tax;
        }else{
            tax = 0;
            subtotal = value;
        } 

        let newPayment = {
            product,
            type,
            method,
            bank,
            value,
            tax,
            subtotal,
            date: new Date()
        }
        store.add(newPayment);
        resolve(newPayment);
    });
}

function getPayments(){
    return new Promise( (resolve, reject) => {
        resolve(store.list())
    });
}

function getPayment (id) {
    return new Promise( (resolve, reject) => {
        if(!id){
            reject('Invalid ID');
        }
        resolve(store.get())
    });
}

module.exports = {
    addPayment,
    getPayments,
    getPayment
}