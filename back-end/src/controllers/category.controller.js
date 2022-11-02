const { CategoryService } = require('../services');

const getAllCategoryProducts = async (_req, res) => {
  const productsByCategory = await CategoryService.getAllCategoryProducts();

  res.status(200).json(productsByCategory);
};

module.exports = { getAllCategoryProducts };
