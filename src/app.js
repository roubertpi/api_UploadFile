"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const config = require('./config');


const app = express();
const router = express.Router();
//conectando ao Banco 
mongoose.connect(config.connectionString);

//carregando os Models
const Product = require ('./models/products');
const Cutomer = require ('./models/customer');
const Order = require ('./models/order');


// carregar rotas
const indexRoutes = require ('./routes/index-route');
const products = require ('./routes/products-route');
const customerRoutes = require ('./routes/customer-route');
const orderRoutes = require ('./routes/order-route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando a Primeira rota






app.use("/", indexRoutes);
app.use("/products", products);
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);



module.exports = app;
