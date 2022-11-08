const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://front-end-production-0e5c.up.railway.app/',
}));
app.use(express.json());
app.use(routes);

module.exports = app;
