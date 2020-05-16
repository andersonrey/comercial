const store = require('./store');
const storePayment = require('../payment/store');

function addSale(body){

    let {user, customer, payment, value} = body;
    let payments = Object.values(payment)

    return new Promise (async (resolve, reject) => {
        if(!user || !customer || !payment){
            reject('Invalid data')
        }

        let balance = 0;
        var totalPay = 0;

        for (let i = 0; i < payments.length; i++){

            let getPayment = await storePayment.get(payments[i]);
            let valuePayment = getPayment.value; 
            totalPay = totalPay + valuePayment;
       } 
       balance = value - totalPay;
        let newSale = {
            user,
            customer,
            payment,
            value,
            balance,
            date: new Date()
        }
    
        store.add(newSale);
        resolve(newSale);
    });
    
}

function getSales(){
    return new Promise( async (resolve, reject) => {
        resolve(store.list())
    });
}

function getSale(id){
    return new Promise( (resolve, reject) => {
        if (!id){
            reject('Invalid ID');
        }
        resolve(store.get(id))
    });
}

module.exports = {
    addSale,
    getSales,
    getSale

}