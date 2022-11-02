const { ProductController } = require('../controllers');
const { LoginMiddleware } = require('../middlewares');
const express = require('express');
const routes = express.Router();

routes.get('/', ProductController.getAllProducts);
routes.post('/buy', LoginMiddleware.customerAuthentication, ProductController.buyProduct);

module.exports = routes;
