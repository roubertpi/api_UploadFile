"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// carregar rotas
const indexRoutes = require ('./routes/index-route');
const products = require ('./routes/products-route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando a Primeira rota






app.use("/", indexRoutes);
app.use("/products", products);

module.exports = app;
