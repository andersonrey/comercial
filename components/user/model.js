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
        required: [true, "Name is necesary"],
    },
    password: {
        type: String,
        required: [true, "Password is necesary"],
    },
    role: {
        type: String,
        default: 'USER',
        required: [true],
        enum: validRoles,
    },
})

const model = mongoose.model('User', mySchema);
module.exports =  model;