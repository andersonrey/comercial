const Model = require('./model');

function addSale(data) {
    const sale = new Model(data);
    return sale.save();
}

function getSales(){
    return new Promise ((resolve, reject) => {
        Model.find()
            .populate({ path: 'user', select: 'name email' })
            .populate('customer')
            .populate({
                path: 'payment',
                populate: { path: 'payment' }})
            .populate({
                path: 'payment',
                populate: { path: 'product' }})
            .exec((err, populated) => {
                if (err){
                    reject(err);
                    return false;
                }
                resolve(populated)
            })
    })
}

function getSale(id){
    return new Promise ((resolve, reject) => {
        Model.findOne({_id: id})
            .populate({ path: 'user', select: 'name email' })
            .populate('customer')
            .populate({
                path: 'payment',
                populate: { path: 'payment' }})
            .populate({
                path: 'payment',
                populate: { path: 'product' }})
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
    add: addSale,
    list: getSales,
    get: getSale
}