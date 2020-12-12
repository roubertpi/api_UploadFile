'use strict';

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    //O ID é criado automaticamente
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Customer', schema);