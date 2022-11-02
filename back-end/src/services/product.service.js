const { Product, ProductCustomer } = require('../models');

const getAllProducts = async () => Product.findAll({
  attributes: { exclude: ['CategoryId'] },
});

const buyProduct = async (productId, customerId) => {
  Product.decrement('quantity', { by: 1, where: { id: productId } });
  
  ProductCustomer.create({ product_id: productId, customer_id: customerId, purchase_date: new Date() });

  return Product.findOne({
    attributes: { exclude: ['CategoryId'] },
    where: {id: productId},
  });
}

module.exports = {
  getAllProducts,
  buyProduct,
};
