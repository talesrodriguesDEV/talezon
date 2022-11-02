const { ProductController } = require('../controllers');
const express = require('express');
const routes = express.Router();

routes.get('/', ProductController.getAllProducts);

module.exports = routes;
