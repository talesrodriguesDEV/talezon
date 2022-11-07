const { CustomerController } = require('../controllers');
const { LoginMiddleware } = require('../middlewares');
const express = require('express');
const routes  = express.Router();

routes.post('/signIn', CustomerController.customerSignIn);
routes.post('/shoppingHistory', LoginMiddleware.customerAuthentication, CustomerController.customerShoppingHistory);
routes.get('/', CustomerController.listCustomers);

module.exports = routes;
