const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Names is necesary'],
    },
    type: {
        type: String,
        required: [true, "Type is necesary"],
    },
    exam: {
        type: String,
        required: [true, "Exam is necesary"],
    },
})

const model = mongoose.model('Course', mySchema);
module.exports =  model;