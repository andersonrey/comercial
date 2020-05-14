const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let validRoles = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} no es un role válido'
}


const mySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Names is necesary'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is necesary"],
    },
    phone: {
        type: String,
        required: [true, "Phone is necesary"],
    },
    city: {
        type: String,
        required: [true, "City is necesary"],
    },
})

const model = mongoose.model('Customer', mySchema);
module.exports =  model;