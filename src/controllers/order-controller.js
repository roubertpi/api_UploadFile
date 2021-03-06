"use strict";

const Validador = require ('../validators/fluent-validator');
const repository = require ('../repositories/order-repositor');
const guid = require ('guid');

exports.get = async (req, res, next)=> {
  try{
    var data = await repository.get();
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({
      message:'Falha ao processar sua requisição'
    });
  }
}
exports.post = async (req, res, next) => {
    
    try {
      await repository.creat({
        customer: req.body.customer,
        number:guid.raw().substring(0,6),
        items:req.body.items
      })
      res.status(201).send({
        message:'Pedido Cadastrado com sucesso!'});
    } catch (e){
      res.status(500).send({
        message:'Falha ao processar sua requisição'
      });
    }
  };