const store = require('./store');
const storePayment = require('../payment/store');

function addSale(body){

    let {user, customer,value} = body;
    // let payments = Object.values(payment)

    return new Promise (async (resolve, reject) => {
        if(!user || !customer || !value){
            reject('Invalid data')
        }

        let balance = 0;
        let totalPay = 0;

       balance = value - totalPay;


        let newSale = {
            user,
            customer,
            value,
            balance,
            total : totalPay,
            date: new Date()
        }
    
        resolve(store.add(newSale));
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

function updateSale(id, body){
    return new Promise( async (resolve, reject) => {
        let {payment} = body;

        console.log("payment: " + payment );

            if(!payment || !id){
                reject('Invalid data')
            }
    
            let balance = 0;
            let totalPay = 0;
            let thisObject = await getSale(id);
            console.log(thisObject);

            let value = thisObject.value;
            let payments = thisObject.payment;
            payments.push(payment);
            
            for (let i = 0; i < payments.length; i++){
                let getPayment = await storePayment.get(payments[i]);
                let valuePayment = getPayment.value; 
                totalPay = totalPay + valuePayment;
            } 
          
           balance = value - totalPay;
    
           let newSale = {
            user: thisObject.user,
            customer: thisObject.customer,
            payment: payments,
            value,
            balance,
            total : totalPay,
            date: new Date()
        }
            resolve( store.update(id, newSale));
        });
}

module.exports = {
    addSale,
    getSales,
    getSale,
    updateSale

}