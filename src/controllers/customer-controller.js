"use strict";

const Validador = require ('../validators/fluent-validator');
const repository = require ('../repositories/customer--repository');
const md5 = require('md5')

exports.post = async (req, res, next) => {
    let contract = new Validador();
    contract.hasMinLen(req.body.name,3, 'o nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email,3, 'o Email  deve conter 3 caracteres');
    contract.hasMinLen(req.body.password, 3, 'a Senha deve conter 3 caracteres');
  
    if(!contract.isValid()){
      res.status(400).send(contract.errors()).end();
      return;
    }
    try {
      await repository.creat({
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password + global.SALT_KEY)
      })
      res.status(201).send({
        message:'Cliente Cadastrado com Sucesso'});
    } catch (e){
      res.status(500).send({
        message:'Falha ao processar sua requisição'
      });
    }
  };