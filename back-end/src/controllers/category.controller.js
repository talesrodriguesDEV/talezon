const { CategoryService } = require('../services');

const getAllCategoryProducts = async (_req, res) => {
  const result = await CategoryService.getAllCategoryProducts();

  res.status(200).json(result);
};

module.exports = { getAllCategoryProducts };
