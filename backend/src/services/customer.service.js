const { Customer, Product } = require('../models');

const customerSignIn = async ({ name, email, password }) => Customer.create({ name, email, password });

const listCustomers = async () => Customer.findAll({
  include: [
    {
      model: Product,
      as: 'products',
      attributes: {exclude: ['CategoryId']},
    },
  ],
});

const customerShoppingHistory = async (email) => Customer.findOne({
  where: { email },
  include: [
    {
      model: Product,
      as: 'products',
      attributes: {exclude: ['CategoryId']},
    },
  ],
});

module.exports = {
  customerSignIn,
  listCustomers,
  customerShoppingHistory,
};
