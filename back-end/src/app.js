const express = require('express');
require('express-async-errors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;
