const { Category, Product } = require('../models');

const getAllCategoryProducts = async () => Category.findAll({
  attributes: [['name', 'category']],
  include: [
    {
      model: Product,
      as: 'products',
      attributes: ['name'],
    },
  ],
});

module.exports = { getAllCategoryProducts };
