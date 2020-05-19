const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema = new Schema({
    product: {
        type: Schema.ObjectId,
        ref: 'Product'
    },
    sale: {
        type: Schema.ObjectId,
        ref: 'Sale'
    },
    type: {
        type: String,
        required: [true, "Type is necesary"],
        enum: ["total", "matricula", "cuota"]
    },
    method: {
        type: String,
        required: [true, "Method is necesary"],
        enum: ["payu", "transferencia", "efectivo", "TC", "TD"]
    },
    bank: {
        type: String,
    },
    value: {
        type: Number,
        required: [true, "Value is necesary"],
    },
    tax: {
        type: Number,
    },
    subtotal: {
        type: Number,
    },
    voucher: {
        type: String,
        required: [true, "No. voucher is necesary"],
    },
    date: Date
})

const model = mongoose.model('Payment', mySchema);
module.exports =  model;