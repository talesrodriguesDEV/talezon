const { CustomerService } = require('../services');
const { jwtUtils } = require('../utils');
require('dotenv');

const customerSignIn = async (req, res) => {
  const newCustomer = req.body;
  await CustomerService.customerSignIn(newCustomer);

  delete newCustomer.password;
  const token = jwtUtils.generateToken(newCustomer);

  res.status(201).json({ token });
};

const listCustomers = async (req, res) => {
  const authorization = req.header('Talezon-Password');
  
  if (authorization !== process.env.TALEZON_PASSWORD) return res.status(403).end();

  const customers = await CustomerService.listCustomers();

  res.status(200).json(customers);
}

const customerShoppingHistory = async (req, res) => {
  const { email } = req.body;

  const customerHistory = await CustomerService.customerShoppingHistory(email);

  res.status(200).json(customerHistory);
}

module.exports = {
  customerSignIn,
  listCustomers,
  customerShoppingHistory,
};
