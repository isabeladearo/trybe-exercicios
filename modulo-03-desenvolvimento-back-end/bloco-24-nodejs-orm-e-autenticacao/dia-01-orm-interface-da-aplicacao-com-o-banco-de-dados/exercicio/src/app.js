const express = require('express');
const { error } = require('./middlewares');

const app = express();

app.use(express.json());

app.use(require('./routers'));

app.use(error);

module.exports = app;