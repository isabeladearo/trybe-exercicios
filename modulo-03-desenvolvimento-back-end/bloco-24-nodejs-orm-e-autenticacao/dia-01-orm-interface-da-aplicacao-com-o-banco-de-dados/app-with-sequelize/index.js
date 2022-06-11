const express = require('express');
const router = require('./src/controllers/userController');

const app = express();

app.use(express.json());

app.use(router);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
