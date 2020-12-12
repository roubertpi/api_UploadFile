'use Strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async ()=>{
    var res = await Order
        .find({},'number status customer items')
        .populate('custumer','name')
        .populate('items.products','title');
        return res;
}
exports.creat = async(body) =>{
    var order = new Order (body);
     await order.save();
}