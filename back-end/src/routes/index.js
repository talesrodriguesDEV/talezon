const express = require('express');
const routes = express.Router();
const CategoryRoutes = require('./category.routes'); 
const ProductRoutes = require('./product.routes');

routes.use('/categories', CategoryRoutes);
routes.use('/products', ProductRoutes);

module.exports = routes;