const { CustomerController } = require('../controllers');
const { LoginMiddleware } = require('../middlewares');
const express = require('express');
const routes  = express.Router();

routes.post('/signIn', CustomerController.customerSignIn);
routes.get('/', CustomerController.listCustomers);
routes.get('/shoppingHistory', LoginMiddleware.customerAuthentication, CustomerController.customerShoppingHistory);

module.exports = routes;
