const express = require('express');
const { SurgeriesController } = require('../controllers');

const router = express.Router();

router.get('/:name', SurgeriesController.getDoctorSurgeries);

module.exports = router;
