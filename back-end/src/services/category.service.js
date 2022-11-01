const { Category, Product } = require('../models');

const getAllCategoryProducts = async () => Category.findAll({
  include: [
    {
      model: Product,
      as: 'products',
      attributes: ['name'],
      through: { attributes: [] },
    },
  ],
});

module.exports = { getAllCategoryProducts };