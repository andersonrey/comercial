const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    customer: {
        type: Schema.ObjectId,
        ref: 'Customer'
    },
    payment: [{
        type: Schema.ObjectId,
        ref: 'Payment'
    }],
    value: {
        type: Number,
        required: [true, "Total Price is necesary"],
    },
    balance: {
        type: Number,
    },
    date: Date,
});

const model = mongoose.model('Sale', mySchema);
module.exports =  model;