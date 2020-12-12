"use strict";
const express = require("express");
const router = express.Router();
const controller = require ('../controllers/product-controller');

router.get('/',controller.get);
router.get('/:slug',controller.getBySlug);
router.get('/admin:id',controller.getById);
router.get('/tags:tag',controller.getByTag);


router.post("/",controller.post);

router.delete("/",controller.delet);

router.put("/:id",controller.put);

module.exports = router;
