const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
}));
app.use(express.json());
app.use(routes);

module.exports = app;
