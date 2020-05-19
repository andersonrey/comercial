const store = require('./store');
const storeProduct = require('../product/store');


function addPayment (body) {
    let {product, sale, type, method, value, bank, voucher} = body;
    return new Promise (async (resolve, reject) => {

        if(!product || !sale || !method || !value){
            reject('Inalid data');
        }
        console.log(body);
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
            sale,
            type,
            method,
            bank,
            value,
            tax,
            subtotal,
            voucher,
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