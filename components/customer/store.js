const Model = require('./model');

function addCustomer(data) {
    const customer = new Model(data);
    return customer.save();
}

function getCustomers(){
    return Model.find();
}

function getCustomer(id){
    return Model.findOne({
        _id: id
    });
}

module.exports = {
    add: addCustomer,
    list: getCustomers,
    get: getCustomer
}