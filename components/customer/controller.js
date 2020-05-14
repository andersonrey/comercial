const store = require('./store');

function addCustomer(body){
    return store.add(body);
}

function getCustomers(){
    return new Promise( async (resolve, reject) => {
        resolve(store.list())
    });
}

function getCustomer(id){
    return new Promise( (resolve, reject) => {
        if (!id){
            reject('Invalid ID');
        }
        resolve(store.get(id))
    });
}

module.exports = {
    addCustomer,
    getCustomers,
    getCustomer

}