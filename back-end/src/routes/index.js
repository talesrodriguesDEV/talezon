const express = require('express');
const routes = express.Router();
const CategoryRoutes = require('./category.routes'); 

routes.use('/categories', CategoryRoutes);

module.exports = routes;