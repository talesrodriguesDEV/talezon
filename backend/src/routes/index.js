const express = require('express');
const routes = express.Router();
const CategoryRoutes = require('./category.routes'); 
const ProductRoutes = require('./product.routes');
const CustomerRoutes = require('./customer.routes');

routes.use('/categories', CategoryRoutes);
routes.use('/products', ProductRoutes);
routes.use('/customers', CustomerRoutes);

module.exports = routes;