const { CustomerService } = require('../services');
const { jwtUtils } = require('../utils');

const customerSignIn = async (req, res) => {
  const newCustomer = req.body;
  await CustomerService.customerSignIn(newCustomer);

  delete newCustomer.password;
  const token = jwtUtils.generateToken(newCustomer);

  res.status(201).json({ token });
};

const listCustomers = async (_req, res) => {
  const customers = await CustomerService.listCustomers();

  res.status(200).json(customers);
}

module.exports = {
  customerSignIn,
  listCustomers,
};
