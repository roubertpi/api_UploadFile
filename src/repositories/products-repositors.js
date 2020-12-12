const { use } = require("../routes/index-route");

'use Strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async ()=>{
    const res = await Product
        .find({
            active:true
        },'title price slug');
        return res;
}

exports.getBySlung = async (slug)=>{
    const res= await Product
    .findOne({
        slug:slug,
        active:true
      },'title description price slug tags');
      return res;
}

exports.getById= async(id)=>{
    const res = await Product
    .findById(id );
    return res;
}

exports.getByTag =async(tag)=>{
    const res = await Product.find({
        tags: tag,
        active:true
      },'title description price slug tags');
      return res;
    
}

exports.creat = async(body) =>{
    var product = new Product (body);
     await product.save();
}

exports.update = async(id, body) =>{
    await Product
    .findByIdAndUpdate(id,{
      $set:{
        title:body.title,
        description: body.description,
        price: body.price,
        slug: body.slug
      }
    })
}

exports.delet = async(id)=>{
    await Product
    .findByIdAndRemove(id)
}