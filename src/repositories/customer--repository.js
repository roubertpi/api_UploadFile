
'use Strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async ()=>{
    const res = await Product
        .find({
            active:true
        },'title price slug');
        return res;
}
exports.creat = async(body) =>{
    var customer = new Customer (body);
     await customer.save();
}