const { Customer } = require('../models');

const customerSignIn = async ({ name, email, password }) => Customer.create({ name, email, password });

const listCustomers = async () => Customer.findAll();

module.exports = {
  customerSignIn,
  listCustomers,
};
