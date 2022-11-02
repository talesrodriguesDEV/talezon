const { jwtUtils } = require('../utils');

const customerAuthentication = (req, res, next) => {
  const token = req.header('User-Token');
  const login = jwtUtils.validateToken(token);
  req.login = login;

  if (!login) return res.status(403).json({ message: 'You need to log in.' });

  return next();
};

module.exports = {
  customerAuthentication,
};
