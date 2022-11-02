const { Product } = require('../models');

const getAllProducts = async () => Product.findAll({
  attributes: { exclude: ['CategoryId'] },
});

module.exports = { getAllProducts };
