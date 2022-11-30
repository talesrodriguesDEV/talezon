const { ProductService } = require('../services');

const getAllProducts =  async (_req, res) => {
  const products = await ProductService.getAllProducts();

  res.status(200).json(products);
};

const buyProduct = async (req, res) => {
  const { productId, customerId } = req.body;
  
  const boughtProduct = await ProductService.buyProduct(productId, customerId);

  res.status(200).json(boughtProduct);
};

module.exports = {
  getAllProducts,
  buyProduct,
};
