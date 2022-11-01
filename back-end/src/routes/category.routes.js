const { CategoryController } = require('../controllers');
const express = require('express');
const routes = express.Router();

routes.get('/', CategoryController.getAllCategoryProducts);

module.exports = routes;
