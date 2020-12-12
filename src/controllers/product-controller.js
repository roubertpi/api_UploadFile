"use strict";

const Validador = require ('../validators/fluent-validator');

const repository = require ('../repositories/products-repositors')


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
exports.getBySlug = async (req, res, next)=> {
  try {
    var data =repository.getBySlung(req.params.slug)
    res.status(201).send(data);

  } catch (e){
    res.status(500).send({
      message:'Falha ao processar sua requisição'
    });
  }
  
}
exports.getById = async(req, res, next)=> {
  try{
    var data = await repository.getById(req.params.id)
    res.status(201).send(data);
  }catch (e){
    res.status(500).send({
      message:'Falha ao processar sua requisição'
    });
  }
 
  
}
exports.getByTag = async (req, res, next)=> {
  try{
    const data= await repository.getByTag(req.params.tag)
    res.status(201).send(data);
  }
  catch (e){
    res.status(500).send({
      message:'Falha ao processar sua requisição'
    });
  }
    

}

exports.post = async (req, res, next) => {
  let contract = new Validador();
  contract.hasMinLen(req.body.title,3, 'o título deve conter pelo menos 3 caracteres');
  contract.hasMinLen(req.body.slug,3, 'o título deve conter 3 caracteres');
  contract.hasMinLen(req.body.description,3, 'o título deve conter 3 caracteres');

  if(!contract.isValid()){
    res.status(400).send(contract.errors()).end();
    return;
  }
  try {
    await repository.creat(req.body)
    res.status(201).send({
      message:'Produto cadastrado'});
  } catch (e){
    res.status(500).send({
      message:'Falha ao processar sua requisição'
    });
  }
};


exports.put = async (req, res, next) => {
try{
  await repository.update(req.params.id , req.body)
      res.status(201).send ({
      message:'Produto Atualizado com sucesso!'
    });
  }
catch (e){
  res.status(500).send({
    message:'Falha ao processar sua requisição'
    });
  }
}

exports.delet = async (req, res, next) => {
  try {
    await repository.delet(req.body.id)  
    res.status(201).send ({
      message:'Produto removido!'
    });
  }
  catch (e){
    res.status(500).send({
      message:'Falha ao processar sua requisição'
      });
    }
};
