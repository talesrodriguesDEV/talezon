const { CustomerController } = require('../controllers');
const express = require('express');
const routes  = express.Router();

routes.post('/signIn', CustomerController.customerSignIn);
routes.get('/', CustomerController.listCustomers);

module.exports = routes;
