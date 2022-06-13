const express = require('express');
const { EmployeesController } = require('../controllers');

const router = express.Router();

router.get('/', EmployeesController.getAll);

router.get('/:id', EmployeesController.getById);

module.exports = router;