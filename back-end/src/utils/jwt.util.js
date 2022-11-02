const jwt = require('jsonwebtoken');
require('dotenv');

const generateToken = (credentials) => jwt.sign({ credentials }, process.env.TALEZON_PASSWORD);

const validateToken = (token) => {
  try {
    const customer = jwt.verify(token, process.env.TALEZON_PASSWORD);

    return customer;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
