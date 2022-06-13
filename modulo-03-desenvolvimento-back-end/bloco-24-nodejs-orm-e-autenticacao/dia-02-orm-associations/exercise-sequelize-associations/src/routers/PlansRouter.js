const express = require('express');
const { PlansController } = require('../controllers');

const router = express.Router();

router.get('/:id/patients', PlansController.getById);

module.exports = router;
