require('dotenv').config();

const config = {
  username: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: 'db',
  dialect: 'mysql',
};

module.exports = config;
