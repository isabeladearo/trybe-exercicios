const express = require('express');

const router = express.Router();

router.use('/employees', require('./EmployeesRouter'));

module.exports = router;
