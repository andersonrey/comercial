const Model = require('./model');

function addPayment(data) {
    const payment = new Model(data);
    return  payment.save();
}

function getPayments(){
    return new Promise ((resolve, reject) => {
        Model.find()
            .populate('product')
            .populate('sale')
            .exec((err, populated) => {
                if (err){
                    reject(err);
                    return false;
                }
                resolve(populated)
            })
    })
}

function getPayment(id){
    return new Promise ((resolve, reject) => {
        Model.findOne({_id: id})
            .populate('product')
            .populate('sale')
            .exec((err, populated) => {
                if (err){
                    reject(err);
                    return false;
                }
                resolve(populated)
            })
    })
}

module.exports = {
    add: addPayment,
    list: getPayments,
    get: getPayment
}