const jwt = require('jsonwebtoken');
require('dotenv');

const generateToken = (credentials) => jwt.sign({ credentials }, process.env.JWT_SECRET);

const validateToken = (token) => {
  try {
    const customer = jwt.verify(token, process.env.JWT_SECRET);

    return customer;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
