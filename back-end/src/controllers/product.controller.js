const { ProductService } = require('../services');

const getAllProducts =  async (_req, res) => {
  const products = await ProductService.getAllProducts();

  res.status(200).json(products);
};

module.exports = { getAllProducts };
