'use strict';

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    //O ID é criado automaticamente
    title:{
        type: String,
        required: true,
        trim: true
    },
    slug:{
        type:String,
        required: [true, 'O slug é obrigatorio'],
        trim: true,
        index:true,
        unique:true
    },
    description:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    active:{
        type: Boolean,
        required:true,
        default:true
    },
    tags:[{  // um array
        type:String,
        required:true
    }]



});

module.exports = mongoose.model('Product', schema);