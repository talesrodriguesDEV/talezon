const jwt = require('jsonwebtoken');

const generateToken = (credentials) => jwt.sign({ credentials }, 'grande talão guerreiro');

const validateToken = (token) => {
  try {
    const customer = jwt.verify(token, 'grande talão guerreiro')

    return customer;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
