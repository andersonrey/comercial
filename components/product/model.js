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
    modality: {
        type: String,
    },
    exam: {
        type: String,
        required: [true, "Exam is necesary"],
    },
})

const model = mongoose.model('Product', mySchema);
module.exports =  model;